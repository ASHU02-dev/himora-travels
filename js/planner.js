// ==========================================================
// HIMORA PRO TRIP PLANNER & REAL-TIME BUDGET ESTIMATOR
// Dynamic calculation across currencies & instant WhatsApp sync
// ==========================================================

const HimoraPlanner = {
  state: {
    destinations: ["Manali", "Kasol"],
    duration: 5,
    travelers: 2,
    vehicle: "suv-innova",
    stayTier: "resort-4star",
    pickupCity: "Chandigarh",
    addOns: ["ams-kit"],
    selectedMonth: "May - June (Pleasant Summer)"
  },

  rates: {
    stayTierPerNightPerPersonINR: {
      "homestay": 1400,
      "resort-4star": 2800,
      "luxury-chalet": 5200
    },
    vehicleDailyINR: {
      "alto": 2200,
      "sedan": 3400,
      "suv-innova": 5200,
      "offroad-thar": 6500,
      "tempo": 7800
    },
    addOnsCostINR: {
      "ams-kit": 1200,
      "ilp-permit": 1500,
      "paragliding": 3200,
      "rafting": 1400,
      "stargazing": 2200,
      "siddu-tasting": 800
    }
  },

  init() {
    this.bindEvents();
    this.recalculate();
  },

  bindEvents() {
    // Destination multi-select chips
    document.querySelectorAll('.planner-dest-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        const dest = chip.dataset.dest;
        if (this.state.destinations.includes(dest)) {
          if (this.state.destinations.length > 1) {
            this.state.destinations = this.state.destinations.filter(d => d !== dest);
            chip.classList.remove('is-active');
          }
        } else {
          this.state.destinations.push(dest);
          chip.classList.add('is-active');
        }
        this.recalculate();
      });
    });

    // Duration slider
    const durationInput = document.getElementById('plannerDuration');
    const durationVal = document.getElementById('plannerDurationVal');
    if (durationInput) {
      durationInput.addEventListener('input', (e) => {
        this.state.duration = parseInt(e.target.value);
        if (durationVal) durationVal.textContent = `${this.state.duration} Days (${this.state.duration - 1} Nights)`;
        this.recalculate();
      });
    }

    // Travelers counter
    const travelersInput = document.getElementById('plannerTravelers');
    const travelersVal = document.getElementById('plannerTravelersVal');
    if (travelersInput) {
      travelersInput.addEventListener('input', (e) => {
        this.state.travelers = parseInt(e.target.value);
        if (travelersVal) travelersVal.textContent = `${this.state.travelers} Traveler${this.state.travelers > 1 ? 's' : ''}`;
        this.recalculate();
      });
    }

    // Vehicle radio buttons
    document.querySelectorAll('input[name="plannerVehicle"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.state.vehicle = e.target.value;
        this.recalculate();
      });
    });

    // Stay tier radio buttons
    document.querySelectorAll('input[name="plannerStayTier"]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.state.stayTier = e.target.value;
        this.recalculate();
      });
    });

    // Pickup dropdown
    const pickupSelect = document.getElementById('plannerPickup');
    if (pickupSelect) {
      pickupSelect.addEventListener('change', (e) => {
        this.state.pickupCity = e.target.value;
        this.recalculate();
      });
    }

    // Month dropdown
    const monthSelect = document.getElementById('plannerMonth');
    if (monthSelect) {
      monthSelect.addEventListener('change', (e) => {
        this.state.selectedMonth = e.target.value;
        this.recalculate();
      });
    }

    // Experience Addons checkboxes
    document.querySelectorAll('.planner-addon-check').forEach(box => {
      box.addEventListener('change', (e) => {
        const val = box.value;
        if (box.checked) {
          if (!this.state.addOns.includes(val)) this.state.addOns.push(val);
        } else {
          this.state.addOns = this.state.addOns.filter(a => a !== val);
        }
        this.recalculate();
      });
    });

    // WhatsApp Export CTA
    const whatsappBtn = document.getElementById('plannerWhatsAppCta');
    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', () => {
        this.sendToWhatsApp();
      });
    }

    // Copy Quote button
    const copyBtn = document.getElementById('plannerCopyQuote');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        this.copyQuoteToClipboard();
      });
    }
  },

  calculateTotalINR() {
    const nights = Math.max(1, this.state.duration - 1);
    const stayRate = this.rates.stayTierPerNightPerPersonINR[this.state.stayTier] || 2500;
    const totalStay = stayRate * nights * this.state.travelers;

    const vehicleRate = this.rates.vehicleDailyINR[this.state.vehicle] || 4500;
    const totalVehicle = vehicleRate * this.state.duration;

    let totalAddons = 0;
    this.state.addOns.forEach(addon => {
      totalAddons += (this.rates.addOnsCostINR[addon] || 0) * (addon === 'paragliding' || addon === 'rafting' || addon === 'siddu-tasting' ? this.state.travelers : 1);
    });

    // Subtotal + base coordination & permits
    const subtotal = totalStay + totalVehicle + totalAddons;
    return subtotal;
  },

  recalculate() {
    const totalINR = this.calculateTotalINR();
    const currentCurrency = window.currentCurrency || 'INR';
    const currencyInfo = HIMORA_DATA.currencies[currentCurrency] || HIMORA_DATA.currencies.INR;

    const convertedTotal = Math.round(totalINR * currencyInfo.rate);
    const perPerson = Math.round(convertedTotal / Math.max(1, this.state.travelers));

    // Update UI elements
    const totalEl = document.getElementById('plannerTotalCost');
    const perPersonEl = document.getElementById('plannerPerPersonCost');
    const summaryDestEl = document.getElementById('plannerSummaryDests');

    if (totalEl) {
      totalEl.textContent = `${currencyInfo.symbol}${convertedTotal.toLocaleString()}`;
    }
    if (perPersonEl) {
      perPersonEl.textContent = `${currencyInfo.symbol}${perPerson.toLocaleString()} per explorer`;
    }
    if (summaryDestEl) {
      summaryDestEl.textContent = this.state.destinations.join(" ➔ ");
    }
  },

  formatSummaryText() {
    const totalINR = this.calculateTotalINR();
    const curr = window.currentCurrency || 'INR';
    const info = HIMORA_DATA.currencies[curr];
    const totalFormatted = `${info.symbol}${Math.round(totalINR * info.rate).toLocaleString()} ${curr}`;

    const addonsList = this.state.addOns.length ? this.state.addOns.join(', ') : 'None';

    const stayLabels = {
      'homestay': 'Authentic Mountain Homestay',
      'resort-4star': '4-Star Pine Valley Resort',
      'luxury-chalet': 'Private Glass Alpine Chalet'
    };

    const vehicleLabels = {
      'alto': 'Maruti Alto 800/K10 (The Mountain King / Agile Budget)',
      'sedan': 'Sedan (Swift Dzire / Etios)',
      'suv-innova': 'Luxury Innova Crysta',
      'offroad-thar': '4x4 Off-Road Expedition Thar',
      'tempo': 'Force Urbania / Tempo Traveller'
    };

    return `🏔️ *Custom Himalayan Trip Plan — Himora Travels* 🏔️
-----------------------------------
📍 *Valleys to Explore:* ${this.state.destinations.join(', ')}
⏱️ *Duration:* ${this.state.duration} Days (${this.state.duration - 1} Nights)
👥 *Travelers:* ${this.state.travelers} Persons
🚗 *Chauffeur Vehicle:* ${vehicleLabels[this.state.vehicle]}
🏡 *Stay Preference:* ${stayLabels[this.state.stayTier]}
🛫 *Pickup Location:* ${this.state.pickupCity}
📅 *Preferred Travel Time:* ${this.state.selectedMonth}
✨ *Experiences & Add-ons:* ${addonsList}
💰 *Estimated Budget:* ${totalFormatted}

*Hi Himora Travels Concierge! I just customized this mountain itinerary on your website. Please check availability and share the confirmed day-by-day quote.*`;
  },

  sendToWhatsApp() {
    const text = encodeURIComponent(this.formatSummaryText());
    const url = `https://wa.me/${HIMORA_DATA.brand.whatsapp}?text=${text}`;
    window.open(url, '_blank');
  },

  copyQuoteToClipboard() {
    const text = this.formatSummaryText();
    navigator.clipboard.writeText(text).then(() => {
      const toast = document.getElementById('himoraToast');
      if (toast) {
        toast.textContent = "✓ Custom itinerary copied to clipboard!";
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
      } else {
        alert("Custom itinerary summary copied to clipboard!");
      }
    });
  }
};

window.HimoraPlanner = HimoraPlanner;
