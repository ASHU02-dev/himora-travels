// ============================================================
// HIMALAYAN AMBIENT SOUNDSCAPE SYNTHESIZER (Web Audio API)
// Generates realistic alpine wind breeze & resonant singing bowl
// Zero external files, 100% lightweight & offline responsive.
// ============================================================

class MountainSoundscape {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.windGain = null;
    this.windFilter = null;
    this.bowlTimer = null;
  }

  initAudio() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  start() {
    this.initAudio();
    if (this.isPlaying) return;

    // --- 1. Synthesize Pink Noise for Gentle Mountain Wind ---
    const bufferSize = this.audioCtx.sampleRate * 4;
    const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      output[i] *= 0.11;
      b6 = white * 0.115926;
    }

    const whiteNoise = this.audioCtx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Low-pass filter for distant mountain gusting
    this.windFilter = this.audioCtx.createBiquadFilter();
    this.windFilter.type = 'lowpass';
    this.windFilter.frequency.setValueAtTime(320, this.audioCtx.currentTime);

    this.windGain = this.audioCtx.createGain();
    this.windGain.gain.setValueAtTime(0.01, this.audioCtx.currentTime);
    this.windGain.gain.exponentialRampToValueAtTime(0.18, this.audioCtx.currentTime + 3);

    whiteNoise.connect(this.windFilter);
    this.windFilter.connect(this.windGain);
    this.windGain.connect(this.audioCtx.destination);
    whiteNoise.start(0);
    this.noiseSource = whiteNoise;

    // Subtle natural LFO wind variation
    this.lfoInterval = setInterval(() => {
      if (!this.isPlaying || !this.windFilter) return;
      const targetFreq = 220 + Math.random() * 280;
      this.windFilter.frequency.exponentialRampToValueAtTime(targetFreq, this.audioCtx.currentTime + 2.5);
    }, 3000);

    // Initial gentle bell & periodic singing bowl
    this.playTibetanSingingBowl(216); // Om frequency ~216Hz
    this.bowlTimer = setInterval(() => {
      if (this.isPlaying && Math.random() > 0.4) {
        this.playTibetanSingingBowl(216 + (Math.random() > 0.5 ? 72 : 0));
      }
    }, 14000);

    this.isPlaying = true;
    this.updateUI(true);
  }

  stop() {
    if (!this.isPlaying) return;
    if (this.windGain && this.audioCtx) {
      this.windGain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 1.5);
      setTimeout(() => {
        try {
          if (this.noiseSource) this.noiseSource.stop();
        } catch(e) {}
      }, 1600);
    }
    clearInterval(this.lfoInterval);
    clearInterval(this.bowlTimer);
    this.isPlaying = false;
    this.updateUI(false);
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
  }

  playTibetanSingingBowl(rootFreq = 216) {
    if (!this.audioCtx) return;
    const now = this.audioCtx.currentTime;

    // Harmonic bell partials (Singing Bowl acoustics)
    const partials = [
      { ratio: 1.0, gain: 0.22, decay: 6 },
      { ratio: 2.76, gain: 0.12, decay: 4.5 },
      { ratio: 5.4, gain: 0.06, decay: 3 }
    ];

    partials.forEach(p => {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(rootFreq * p.ratio, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(p.gain, now + 0.12);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + p.decay);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start(now);
      osc.stop(now + p.decay);
    });
  }

  updateUI(active) {
    const btn = document.getElementById('soundscapeToggle');
    const label = document.getElementById('soundscapeLabel');
    if (btn) {
      btn.classList.toggle('is-playing', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    }
    if (label) {
      label.textContent = active ? 'Sound: Himalayan Wind & Bowl (Active)' : 'Himalayan Soundscape (Listen)';
    }
  }
}

window.soundscape = new MountainSoundscape();
