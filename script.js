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
      html += `
        <div class="package-card">
          <div class="card-header">
            <div class="package-name">
              ${pkg.name}
              ${unitDisplay}
            </div>
            ${formatGearbox(pkg.gearbox)}
          </div>
          <div class="card-body">
            ${durationHTML(pkg.duration)}
            <div class="description">📘 ${pkg.description}</div>
            ${renderIncludes(pkg.includes)}
            <div class="price">N$ ${pkg.price.toLocaleString()}<small> / per course</small></div>
            <a href="#" class="btn" onclick="event.preventDefault(); alert('📞 Enquiry for ${pkg.name} (${pkg.gearbox}) — contact IDAN: info@idan.na');">📅 Enquire now</a>
          </div>
        </div>
      `;
    });

    html += `</div></div>`;
  }

  if (html === "") html = "<p style='text-align:center'>No packages found.</p>";
  root.innerHTML = html;

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

  const expandAllButton = document.getElementById('expand-all');
  const collapseAllButton = document.getElementById('collapse-all');

  if (expandAllButton) {
    expandAllButton.addEventListener('click', () => setAllSections(true));
  }

  if (collapseAllButton) {
    collapseAllButton.addEventListener('click', () => setAllSections(false));
  }
}

renderWebsite();
