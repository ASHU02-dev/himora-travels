// ============================================================
// INTERACTIVE HIMALAYAN VALLEY MAP & ALTITUDE VISUALIZER
// Visualizing Himachal's dramatic geography for travelers
// ============================================================

const valleyData = {
  manali: {
    title: "Manali & Solang Valley",
    altitude: "2,050 m (6,725 ft)",
    driveTime: "7 hrs from Chandigarh via New 4-Lane",
    bestFor: "Snow passes, Rohtang, Atal Tunnel, riverside cafes & adventure sports",
    dish: "Siddu with hot ghee, Himalayan river trout",
    packageId: "manali-solang-alpine",
    accent: "#38bdf8",
    bgPhoto: "images/landmarks/solang.jpg"
  },
  spiti: {
    title: "Spiti Valley & Chandratal",
    altitude: "3,800 m to 4,551 m (15,000 ft)",
    driveTime: "12 hrs circuit via Kinnaur / Atal Tunnel",
    bestFor: "Lunar desert landscapes, 1000-year Key monastery, billion-star stargazing",
    dish: "Butter tea (Po Cha), Spitian Thukpa & Tingmo",
    packageId: "spiti-circuit",
    accent: "#f59e0b",
    bgPhoto: "images/landmarks/key_monastery.jpg"
  },
  kasol: {
    title: "Kasol & Parvati Valley",
    altitude: "1,580 m to 2,960 m",
    driveTime: "6.5 hrs from Chandigarh",
    bestFor: "Pine forest hiking, Kheerganga hot springs, Tosh village, riverside cafes",
    dish: "Fresh apple crumble, wood-fired pita falafel",
    packageId: "kasol-kheerganga-magic",
    accent: "#10b981",
    bgPhoto: "images/landmarks/parvati_kasol.jpg"
  },
  shimla: {
    title: "Shimla & Kufri (Himora HQ)",
    altitude: "2,276 m (7,467 ft)",
    driveTime: "3.5 hrs from Chandigarh Airport",
    bestFor: "Colonial British architecture, Mall Road, toy train, pine ridge trails",
    dish: "Madra (chickpea yogurt curry), Chha Gosht",
    packageId: "shimla-colonial-heritage",
    accent: "#6366f1",
    bgPhoto: "images/landmarks/ridge_church.jpg"
  },
  dharamshala: {
    title: "Dharamshala & McLeodGanj",
    altitude: "1,457 m to 2,850 m",
    driveTime: "5.5 hrs from Chandigarh / Airport at Gaggal",
    bestFor: "Dalai Lama's temple, Tibetan monasteries, Triund ridge trek, tea gardens",
    dish: "Tibetan Momos, Kangri Dham, Herbal Teas",
    packageId: "dharamshala-triund-dalai",
    accent: "#ec4899",
    bgPhoto: "images/landmarks/triund.jpg"
  },
  kinnaur: {
    title: "Kinnaur & Chitkul (Last Village)",
    altitude: "2,600 m to 3,450 m",
    driveTime: "8.5 hrs from Shimla along Sutlej river",
    bestFor: "Cliff-hanging roads, sacred Kinner Kailash peak, apple orchards, Kamru fort",
    dish: "Crisp Royal Delicious apples, Kinnauri buckwheat pancakes",
    packageId: "kinnaur-sangla-chitkul",
    accent: "#f97316",
    bgPhoto: "images/landmarks/chitkul.jpg"
  },
  bir: {
    title: "Bir Billing",
    altitude: "2,400 m (Takeoff) / 1,500 m (Bir)",
    driveTime: "6 hrs from Chandigarh",
    bestFor: "World #2 paragliding takeoff, sunset flights, eco-monastery culture",
    dish: "Organic vegan bakery delicacies, artisan kombucha",
    packageId: "bir-billing-paragliding",
    accent: "#06b6d4",
    bgPhoto: "images/landmarks/bir.jpg"
  },
  tirthan: {
    title: "Tirthan Valley & Jibhi",
    altitude: "1,600 m to 3,120 m (Jalori Pass)",
    driveTime: "6 hrs from Chandigarh",
    bestFor: "Untouched Great Himalayan National Park, Serolsar Lake, trout angling",
    dish: "Wood-smoked mountain trout, fresh forest honey",
    packageId: "tirthan-jibhi-secret",
    accent: "#84cc16",
    bgPhoto: "images/landmarks/jibhi_waterfall.jpg"
  }
};

function initValleyMap() {
  const pins = document.querySelectorAll('.map-valley-pin');
  const card = document.getElementById('mapDetailCard');

  if (!card) return;

  function showValley(valleyKey) {
    const data = valleyData[valleyKey];
    if (!data) return;

    // Update active pin
    pins.forEach(p => p.classList.toggle('is-selected', p.dataset.valley === valleyKey));

    // Fill card
    document.getElementById('mapDetailTitle').textContent = data.title;
    document.getElementById('mapDetailAltitude').textContent = data.altitude;
    document.getElementById('mapDetailDrive').textContent = data.driveTime;
    document.getElementById('mapDetailBestFor').textContent = data.bestFor;
    document.getElementById('mapDetailFood').textContent = data.dish;
    
    const photoEl = document.getElementById('mapDetailPhoto');
    if (photoEl) {
      photoEl.src = data.bgPhoto;
      photoEl.alt = data.title;
    }

    const ctaBtn = document.getElementById('mapDetailCta');
    if (ctaBtn) {
      ctaBtn.onclick = () => {
        if (window.openPackageModal) {
          window.openPackageModal(data.packageId);
        }
      };
    }

    card.classList.remove('fade-pulse');
    void card.offsetWidth; // trigger reflow
    card.classList.add('fade-pulse');
  }

  pins.forEach(pin => {
    pin.addEventListener('click', () => {
      showValley(pin.dataset.valley);
    });
  });

  // Default to Spiti
  showValley('spiti');
}

window.initValleyMap = initValleyMap;
