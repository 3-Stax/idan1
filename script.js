const packagesData = [
  { unitCode: "A1", name: "BEGINNERS COURSE code B", gearbox: "Auto", duration: "2 hours a day, for 5 days", description: "Group course, for complete beginners", price: 555, includes: "", category: "BEGINNERS COURSE" },
  { unitCode: "A1", name: "BEGINNERS COURSE code B", gearbox: "Manual", duration: "2 hours a day, for 5 days", description: "Group course, for complete beginners", price: 500, includes: "", category: "BEGINNERS COURSE" },
  { unitCode: "A2", name: "INDIVIDUAL COURSE code B", gearbox: "Auto", duration: "2 hours a day, for 5 days", description: "individual course for advanced beginners", price: 855, includes: "", category: "INDIVIDUAL COURSE" },
  { unitCode: "A2", name: "INDIVIDUAL COURSE code B", gearbox: "Manual", duration: "2 hours a day, for 5 days", description: "individual course for advanced beginners", price: 800, includes: "", category: "INDIVIDUAL COURSE" },
  { unitCode: "A3", name: "BOOST COURSE code B", gearbox: "Auto", duration: "2 hours a day, for 12 days", description: "individual course, for all individuals", price: 1755, includes: "A2, B1, D1", category: "BOOST COURSE" },
  { unitCode: "A3", name: "BOOST COURSE code B", gearbox: "Manual", duration: "2 hours a day, for 12 days", description: "individual course, for all individuals", price: 1700, includes: "A2, B1, D1", category: "BOOST COURSE" },
  { unitCode: "A3", name: "BOOST COURSE code B", gearbox: "Both", duration: "2 hours a day, for 14 days", description: "individual course, for all individuals", price: 3280, includes: "A2, B1, D1, C1, G1-(ZIGZAG only)", category: "BOOST COURSE" },
  { unitCode: "B1", name: "LEARNERS LICENSE", gearbox: "—", duration: "1 hour a day, for 5 days", description: "All individual", price: 555, includes: "", category: "LEARNERS LICENSE CLASSES" },
  { unitCode: "C1", name: "B-SET (basic set of skills)", gearbox: "—", duration: "2 hours a day, for 5 days", description: "learners, road awareness, CPR & fire fighting", price: 1855, includes: "", category: "B-SET PROGRAM" },
  { unitCode: "D1", name: "CAR HIRE code B (natis test)", gearbox: "Both", duration: "1 hour a day", description: "All individual", price: 600, includes: "", category: "NATIS CARHIRE" },
  { unitCode: "E1", name: "MOTORBIKES code A", gearbox: "Both", duration: "2 hours a day, for 5 days", description: "All individual", price: 855, includes: "", category: "MOTORBIKES" },
  { unitCode: "F1", name: "TRUCK code C1", gearbox: "Manual", duration: "2 hours a day, for 5 days", description: "All individual", price: 1455, includes: "", category: "TRUCKS" },
  { unitCode: "F2", name: "TRUCK code C", gearbox: "Both", duration: "2 hours a day, for 5 days", description: "All individual", price: 1955, includes: "", category: "TRUCKS" },
  { unitCode: "F3", name: "TRUCK code C1E", gearbox: "Auto", duration: "2 hours a day, for 5 days", description: "All individual", price: 2955, includes: "", category: "TRUCKS" },
  { unitCode: "F4", name: "TRUCK code CE", gearbox: "Auto", duration: "2 hours a day, for 5 days", description: "All individual", price: 4355, includes: "", category: "TRUCKS" },
  { unitCode: "G1", name: "DEFENSIVE DRIVING", gearbox: "Both", duration: "2 hours a day, for 12 days", description: "Advanced Drivers", price: 13555, includes: "", category: "DEFENSIVE DRIVING COURSE" },
  { unitCode: "H1", name: "FUN CLUB SPINNING", gearbox: "Both", duration: "2 hours a day, for 10 days", description: "Advanced Drivers", price: 10000, includes: "", category: "FUN CLUB" },
  { unitCode: "H2", name: "FUN CLUB DRIFTING", gearbox: "Both", duration: "2 hours a day, for 10 days", description: "Advanced Drivers", price: 16000, includes: "", category: "FUN CLUB" },
  { unitCode: "H3", name: "FUN CLUB RACING BEGINNER", gearbox: "Both", duration: "2 hours a day, for 15 days", description: "Advanced Drivers", price: 19000, includes: "H2", category: "FUN CLUB" },
  { unitCode: "H4", name: "FUN BOOST", gearbox: "Both", duration: "2 hours a day, for 22 days", description: "Advanced Drivers", price: 33000, includes: "H1, H2, H3", category: "FUN CLUB" },
  { unitCode: "K1", name: "GRADER", gearbox: "Auto", duration: "2 hours a day, for 7 days", description: "All individual", price: 7800, includes: "", category: "CONSTRUCTION EQUIP COURSE" },
  { unitCode: "K2", name: "TLB/JCB", gearbox: "Auto", duration: "2 hours a day, for 7 days", description: "All individual", price: 5800, includes: "", category: "CONSTRUCTION EQUIP COURSE" },
  { unitCode: "K3", name: "EXCAVATOR", gearbox: "Auto", duration: "2 hours a day, for 7 days", description: "All individual", price: 6500, includes: "", category: "CONSTRUCTION EQUIP COURSE" },
  { unitCode: "K4", name: "LOADER", gearbox: "Auto", duration: "2 hours a day, for 7 days", description: "All individual", price: 4800, includes: "", category: "CONSTRUCTION EQUIP COURSE" },
  { unitCode: "K5", name: "FORK-LIFT", gearbox: "Auto", duration: "2 hours a day, for 3 days", description: "All individual", price: 1000, includes: "", category: "CONSTRUCTION EQUIP COURSE" },
  { unitCode: "K6", name: "ABNORMAL (LOWBED)", gearbox: "Both", duration: "2 hours a day, for 5 days", description: "All individual", price: 5200, includes: "F4", category: "CONSTRUCTION EQUIP COURSE" },
  { unitCode: "K7", name: "ROLLER COMPACTOR", gearbox: "Auto", duration: "2 hours a day, for 3 days", description: "All individual", price: 1000, includes: "", category: "CONSTRUCTION EQUIP COURSE" },
  { unitCode: "K8", name: "BULLDOZER", gearbox: "Auto", duration: "2 hours a day, for 10 days", description: "All individual", price: 5600, includes: "", category: "CONSTRUCTION EQUIP COURSE" }
];

const categoryOrder = [
  "BEGINNERS COURSE",
  "INDIVIDUAL COURSE",
  "BOOST COURSE",
  "LEARNERS LICENSE CLASSES",
  "B-SET PROGRAM",
  "NATIS CARHIRE",
  "MOTORBIKES",
  "TRUCKS",
  "DEFENSIVE DRIVING COURSE",
  "FUN CLUB",
  "CONSTRUCTION EQUIP COURSE"
];

function getCardImages(pkg) {
  const base = "Assets";
  
  if (pkg.category === "BEGINNERS COURSE") {
    const sub = "BeginersCourse";
    return pkg.gearbox === "Auto" 
      ? [`${base}/${sub}/automatic/autob1.jpg`] 
      : [`${base}/${sub}/manual/manualb1.jpg`];
  }

  if (pkg.category === "INDIVIDUAL COURSE") {
    const sub = "IndividualCourse";
    return pkg.gearbox === "Auto" 
      ? [`${base}/${sub}/auto/autoi1.jpg`] 
      : [`${base}/${sub}/manual/manuali1.jpg`];
  }

  if (pkg.category === "BOOST COURSE") {
    const sub = "BoosterCourse";
    if (pkg.gearbox === "Auto") {
      return [`${base}/${sub}/boost1.jpg`, `${base}/${sub}/boost2.jpg`];
    } 
    else if (pkg.gearbox === "Manual") {
      return [`${base}/${sub}/boost3.jpg`, `${base}/${sub}/boost4.jpg`];
    } 
    else if (pkg.gearbox === "Both") {
      return [`${base}/${sub}/boost5.jpg`, `${base}/${sub}/boost1.jpg`];
    }
  }

  if (pkg.category === "LEARNERS LICENSE CLASSES") {
    return [`${base}/LearnerLicenseClass/class1.jpg`, `${base}/LearnerLicenseClass/class2.jpg`];
  }

  /* FIXED: Matches exactly with array strings to ensure proper heavy machine image outputs */
  if (pkg.category === "CONSTRUCTION EQUIP COURSE") {
    const sub = "ConstructionEC";
    switch (pkg.unitCode) {
      case "K1": return [`${base}/${sub}/Grader/Grader1.jpg`, `${base}/${sub}/Grader/Grader2.jpg`];
      case "K2": return [`${base}/${sub}/JCB/jcb1.jpg`, `${base}/${sub}/JCB/jcb2.jpg`, `${base}/${sub}/JCB/tlb1.jpg`, `${base}/${sub}/JCB/tlb2.jpg`];
      case "K3": return [`${base}/${sub}/Excavator/Excavator1.jpg`];
      case "K4": return [`${base}/${sub}/Loader/Loader1.jpg`, `${base}/${sub}/Loader/Loader2.jpg`];
      case "K5": return [`${base}/${sub}/Forklift/Forklift1.jpg`, `${base}/${sub}/Forklift/Forklift2.jpg`];
      case "K6": return [`${base}/${sub}/Lowbed/Lowbed.jpg`, `${base}/${sub}/Lowbed/Lowbed2.jpg`];
      case "K7": return [`${base}/${sub}/RollerCompactor/Roller1.jpg`, `${base}/${sub}/RollerCompactor/Roller2.jpg`];
      case "K8": return [`${base}/${sub}/Bulldozer/Bulldozer1.jpg`, `${base}/${sub}/Bulldozer/Bulldozer2.jpg`];
      default: return [];
    }
  }

  if (pkg.category === "FUN CLUB") {
    const sub = "FunClub";
    if (pkg.unitCode === "H1") {
      return [`${base}/${sub}/Spin/Spin1.jpg`, `${base}/${sub}/Spin/Spin2.jpg`];
    }
    if (pkg.unitCode === "H2") {
      return [`${base}/${sub}/Drift/Drift1.jpg`, `${base}/${sub}/Drift/Drift2.jpg`];
    }
    if (pkg.unitCode === "H3") {
      return [`${base}/${sub}/Race/Race1.jpg`, `${base}/${sub}/Race/Race2.jpg`];
    }
    if (pkg.unitCode === "H4") {
      return [`${base}/${sub}/boost/fboost1.jpg`, `${base}/${sub}/boost/fboost2.jpg`, `${base}/${sub}/boost/fboost3.jpg`];
    }
  }

  switch (pkg.category) {
    case "MOTORBIKES":
      return [`${base}/Bike/Bike1.jpg`, `${base}/Bike/Bike2.jpg`, `${base}/Bike/Bike3.jpg`, `${base}/Bike/Bike4.jpg`];
    case "B-SET PROGRAM":
      return [`${base}/Bset/pexels-andromeda99-18340568.jpg`, `${base}/Bset/pexels-tahir-33029222.jpg`, `${base}/Bset/pexels-rdne-6520061.jpg`];
    case "NATIS CARHIRE":
      return [`${base}/NatisCH/car1.jpg`, `${base}/NatisCH/car2.jpg`, `${base}/NatisCH/car3.jpg`];
    case "TRUCKS":
      if (pkg.unitCode === "F1") return [`${base}/Truck/Truck1.jpg`, `${base}/Truck/Truck2.jpg`];
      if (pkg.unitCode === "F2") return [`${base}/Truck/Truck3.jpg`, `${base}/Truck/Truck4.jpg`];
      if (pkg.unitCode === "F3") return [`${base}/Truck/Truck5.jpg`, `${base}/Truck/Truck6.jpg`];
      if (pkg.unitCode === "F4") return [`${base}/Truck/Truck7.jpg`, `${base}/Truck/Truck8.jpg`, `${base}/Truck/Truck9.jpg`];
      return [`${base}/Truck/Truck1.jpg`];
    case "DEFENSIVE DRIVING COURSE":
      return [`${base}/DefensiveDriving/Defense1.jpg`, `${base}/DefensiveDriving/Defense2.jpg`];
    default:
      return [`${base}/NatisCH/car1.jpg`];
  }
}

function renderIncludes(includesStr) {
  if (!includesStr || includesStr.trim() === "") return "";
  return `<div class="includes-badge">📦 + includes: ${includesStr}</div>`;
}

function formatGearbox(gearbox) {
  if (gearbox === "—" || gearbox === "") return "";
  return `<span class="gearbox">⚙️ ${gearbox}</span>`;
}

function durationHTML(duration) {
  return `<div class="duration">
            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>${duration}</span>
          </div>`;
}

function renderWebsite() {
  const root = document.getElementById("packages-root");
  if (!root) return;
  let html = "";

  for (let cat of categoryOrder) {
    const catPackages = packagesData.filter(p => p.category === cat);
    if (catPackages.length === 0) continue;

    html += `<div class="category">`;
    html += `<button type="button" class="category-toggle" aria-expanded="false">${cat}</button>`;
    html += `<div class="cards-grid collapsed">`;

    catPackages.forEach(pkg => {
      const unitDisplay = pkg.unitCode ? `<span class="unit-code">${pkg.unitCode}</span>` : "";
      const images = getCardImages(pkg);
      
      let imagesHTML = "";
      let dotsHTML = "";
      images.forEach((imgUrl, idx) => {
        imagesHTML += `<img src="${imgUrl}" alt="${pkg.name} view ${idx + 1}" onerror="this.style.display='none'">`;
        dotsHTML += `<span class="dot ${idx === 0 ? 'active' : ''}"></span>`;
      });

      // Sanitization utility for safe extraction inside data labels
      const safePackageName = pkg.name.replace(/'/g, "\\'");

      html += `
        <div class="package-card">
          <div class="card-header">
            <div class="package-name">
              ${pkg.name}
              ${unitDisplay}
            </div>
            ${formatGearbox(pkg.gearbox)}
          </div>

          ${images.length > 0 ? `
          <div class="card-carousel" data-unit="${pkg.unitCode || 'default'}">
            <div class="carousel-track">
              ${imagesHTML}
            </div>
            ${images.length > 1 ? `<div class="carousel-dots">${dotsHTML}</div>` : ''}
          </div>
          ` : ''}

          <div class="card-body">
            ${durationHTML(pkg.duration)}
            <div class="description">📘 ${pkg.description}</div>
            ${renderIncludes(pkg.includes)}
            <div class="price">N$ ${pkg.price.toLocaleString()}<small> / per course</small></div>
            <a href="#contact" class="btn" data-target-package="${safePackageName}">📅 Enquire now</a>
          </div>
        </div>
      `;
    });

    html += `</div></div>`;
  }

  if (html === "") html = "<p style='text-align:center'>No packages found.</p>";
  root.innerHTML = html;

  // Add event listeners to the generated enquiry buttons
  root.querySelectorAll('.btn[data-target-package]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetName = btn.getAttribute('data-target-package');
      autoSelectPackage(targetName);
    });
  });

  // Collapse / Expand Interactions
  const categoryButtons = root.querySelectorAll('.category-toggle');
  const categoryGrids = root.querySelectorAll('.cards-grid');

  function setAllSections(expanded) {
    categoryButtons.forEach((button, index) => {
      const grid = categoryGrids[index];
      if (!grid) return;
      grid.classList.toggle('collapsed', !expanded);
      button.setAttribute('aria-expanded', expanded.toString());
    });
  }

  categoryButtons.forEach(button => {
    const cardsGrid = button.nextElementSibling;
    button.addEventListener('click', () => {
      const collapsed = cardsGrid.classList.toggle('collapsed');
      button.setAttribute('aria-expanded', (!collapsed).toString());
    });
  });

  // Slide track dot monitor
  root.querySelectorAll('.card-carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const dots = carousel.querySelectorAll('.dot');
    if (!track || dots.length === 0) return;

    track.addEventListener('scroll', () => {
      const width = track.clientWidth;
      const activeIndex = Math.round(track.scrollLeft / width);
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === activeIndex);
      });
    });
  });

  const expandAllButton = document.getElementById('expand-all');
  const collapseAllButton = document.getElementById('collapse-all');

  if (expandAllButton) {
    expandAllButton.addEventListener('click', () => setAllSections(true));
  }
  if (collapseAllButton) {
    collapseAllButton.addEventListener('click', () => setAllSections(false));
  }
}

/* ==========================================================================
   BOOKING ENGINE MODULE
   ========================================================================== */

function initBookingForm() {
  const packageSelect = document.getElementById('select-package');
  if (!packageSelect) return;

  packageSelect.innerHTML = '<option value="" disabled selected>Choose a program...</option>';

  const uniqueNames = [];
  packagesData.forEach(pkg => {
    if (!uniqueNames.includes(pkg.name)) {
      uniqueNames.push(pkg.name);
      const opt = document.createElement('option');
      opt.value = pkg.name;
      opt.textContent = `${pkg.name} [${pkg.unitCode}]`;
      packageSelect.appendChild(opt);
    }
  });

  packageSelect.addEventListener('change', updateGearboxOptions);
  
  const form = document.getElementById('idan-booking-form');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }
}

function updateGearboxOptions() {
  const packageSelect = document.getElementById('select-package');
  const gearboxSelect = document.getElementById('select-gearbox');
  if (!packageSelect || !gearboxSelect) return;

  const selectedName = packageSelect.value;
  const variants = packagesData.filter(p => p.name === selectedName);
  
  gearboxSelect.innerHTML = '';

  const gearboxes = [...new Set(variants.map(v => v.gearbox))];

  if (gearboxes.length === 1 && (gearboxes[0] === '—' || gearboxes[0] === '')) {
    const opt = document.createElement('option');
    opt.value = "Not Applicable";
    opt.textContent = "— (Not required)";
    gearboxSelect.appendChild(opt);
    gearboxSelect.disabled = true;
  } else {
    gearboxSelect.disabled = false;
    gearboxes.forEach(gear => {
      const opt = document.createElement('option');
      opt.value = gear;
      opt.textContent = gear === 'Both' ? 'Manual or Automatic' : gear;
      gearboxSelect.appendChild(opt);
    });
  }
}

// Redirects clicks on product cards to form select elements
function autoSelectPackage(packageName) {
  const packageSelect = document.getElementById('select-package');
  if (!packageSelect) return;
  
  packageSelect.value = packageName;
  updateGearboxOptions();
}

function handleFormSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('student-name').value;
  const phone = document.getElementById('student-phone').value;
  const program = document.getElementById('select-package').value;
  const gear = document.getElementById('select-gearbox').value;
  const location = document.getElementById('select-location').value;

  alert(`Thank you, ${name}!\n\nYour application for "${program}" (${gear}) in ${location} has been captured successfully. Our staff will coordinate timeslots with you via phone at ${phone}.`);
  
  event.target.reset();
  updateGearboxOptions();
}

// Initial script execution hook setup
document.addEventListener('DOMContentLoaded', () => {
  renderWebsite();
  initBookingForm();
});