// =======================
// 1) SITE CONTENT CONFIG
// =======================
const SITE = {
  name: "Eliel Smith",
  heroKicker: "Aerospace Engineering • Contextual Systems Thinking",
  heroSubtitle:
    "Aerospace Engineering + STEM MBA candidate at The University of Alabama.",
  headshot: "assets/headshot.jpg", // <- change this ONE line to swap headshot
  strengths: [
    //"Systems Engineering",          
    //"Modeling & Simulation",
    //"CFD / Analysis",
    //"Technical Writing",
    //"Hands-on Build Teams", 
  ],
  stats: [
    { num: "Spring 2026", label: "B.S. Graduation" },
    { num: "Spring 2027", label: "MBA Graduation" },
    { num: "Minor", label: "Mathematics" },
  ],

  aboutBullets: [
    "Teachable, a great listener, and collaborative — I like clear feedback loops and fast iteration.",
    "Quick, visual, example-based learner: I prototype early, validate with data, then refine.",
    "I enjoy bridging detailed analysis with systems-level thinking (requirements → trade studies → results).",
  ],
  interests: ["Space🪐", "Rockets🚀", "Defense🛡️", "Robotics🤖","Propulsion", "Hypersonics"],
  hobbies: ["Guitar🎸", "Soccer⚽", "Language Learning🌐", "Exercising💪", "Drawing🎨"],

  // Education + coursework (from your resume)
  education: {
    title: "The University of Alabama — Aerospace Engineering (B.S.) | STEM Path to MBA Candidate",
    meta: "Tuscaloosa, Alabama • Honors College • Expected: B.S. May 2026 • MBA May 2027",
    tags: ["Honors College", "Aerospace Engineering", "STEM Path to MBA"],
    coursework: [
      "Flight Dynamics & Control (AEM 468)",
      "Computational Fluid Dynamics (AEM 420)",
      "Propulsion Systems (AEM 408)",
      "Compressible Flow (AEM 413)",
      "Senior Design (AEM 404)",
      "Astronautics (AEM 360)",
      "Aerospace Structures (AEM 341)",
      "Engineering Analysis (ME 349)",
      "Algorithm Development & Implementation (AEM 249)",
      "Applied Differential Equations (MATH 238)",
      "Linear Algebra (MATH 237)",
      "Thermodynamics (ME 215)",
    ],
  },

  awards: [
    { title: "Dean's List", detail: "Academic performance recognition." },
    { title: "Presidential Division Scholarship", detail: "Merit-based scholarship award." },
    { title: "Engineering Leadership Scholarship", detail: "Leadership and engagement recognition." },
    { title: "College Board National Recognition", detail: "National recognition program award." },
    { title: "IB Diploma", detail: "International Baccalaureate Diploma." },
    { title: "GEM Fellow", detail: "Engineering fellowship for technical Master's degree." },

  ],

  // Contact
  contact: [
    { label: "Email", value: "ejsmith19@crimson.ua.edu", href: "mailto:ejsmith19@crimson.ua.edu" },
    { label: "Phone", value: "(205) 774-5833", href: "tel:+12057745833" },
    { label: "LinkedIn", value: "LinkedIn Profile", href: "https://www.linkedin.com/in/eliel-smith-a9411b257/" }, // <- replace with your real LinkedIn URL
  ],

  // Skills (from your resume)
  skills: {
    technical: ["Python", "MATLAB", "SolidWorks", "Ansys", "Microsoft Office"],
    engineering: ["Modeling & Simulation", "Numerical Methods", "CFD", "Systems Modeling"],
    communication: ["Technical Writing", "Public Speaking", "Team Leadership"],
  },

  // =======================
  // 2) PROJECTS (MODULAR)
  // =======================
  // categories: academic | extracurricular | research
projects: [
  // =====================
  // ALL-ONLY (INTERNSHIP)
  // =====================
  {
  id: "aerospacecorp",
  title: "The Aerospace Corporation — Modeling & Simulation Intern",
  category: "All-only",
  timeframe: "May 2025 — Aug 2025",
  image: "assets/afsim.jpg", // main image for card display
  images: [ // for modal gallery
    "assets/intern.jpg",
  ],
  oneLiner: "AFSIM scripting and MBSE schema development supporting the Missile Defense Agency",
  description:
    "Work focused on modeling and simulation for defense applications; I developed AFSIM scripts for radar scheduling and built an MBSE schema in Cameo Systems Modeler to organize MDA capabilities.",
  highlights: [
    "Developed programs in AFSIM to simulate optimized radar platforms",
    "Built an MBSE schema in Cameo Systems Modeler to map MDA program and enterprise capabilities",
    "Produced clear technical artifacts for stakeholder communication and traceability",
  ],
  tools: ["AFSIM", "Cameo Systems Modeler", "Modeling & Simulation"],
  links: [],
},


  // =====================
  // ACADEMIC 
  // =====================
  {
    id: "ffvtol",
    title: "FFVTOL Senior Design — Aerodynamics Systems Lead / Chief Technical Writer",
    category: "academic",
    timeframe: "Sep 2025 — Present",
    image: "assets/drone.jpg",
    images: [
    "assets/ffvtol.jpg",
    "assets/ffvtol1.jpg",
    "assets/ffvtol2.jpg",
    "assets/ffvtol3.jpg",
  ],
    oneLiner: "Fixed-wing modular reconnaissance aircraft with gimbal VTOL capability.",
    description:
      "Capstone senior design project focused on aerodynamic system integration and clear technical communication across design phases.",
    highlights: [
      "Designed, tested, and optimized fixed-wing aerodynamic configurations",
      "Supported VTOL integration at the system level",
      "Authored and maintained formal technical documentation",
    ],
    tools: ["Aerodynamics", "Systems Engineering", "Technical Writing", "Testing"],
    links: [],
  },

  {
    id: "analysis",
    title: "Engineering Analysis — Software-Based Problem Solving",
    category: "academic",
    timeframe: "Coursework",
    image: "assets/analysis.jpg",
    images: [
    "assets/analysis1.jpg",
    "assets/analysis2.jpg",
    "assets/analysis3.jpg",
    "assets/analysis4.jpg"
  ],
    oneLiner: "Physics-based modeling and numerical problem solving using engineering software.",
    description:
      "Representative engineering analysis problems drawn from a wide range of disciplines, emphasizing the formulation of modeling assumptions, application of numerical methods, and interpretation of computational results. The projects demonstrate the use of MATLAB to translate physical systems into solvable mathematical models and to extract meaningful engineering insight from simulation outputs.",
    highlights: [
      "Developed physics-based computational models",
      "Solved ODE-driven systems using numerical techniques",
      "Visualized and interpreted results through plots",
    ],
    tools: ["MATLAB", "Numerical Methods"],
    links: [],
  },

  // =====================
  // ACADEMIC — ADDITIONAL COURSE PROJECTS
  // =====================
{
  id: "controls",
  title: "Flight Dynamics & Control — MATLAB Control Systems (AEM 468)",
  category: "academic",
  timeframe: "Course Project",
  image: "assets/controls.jpg",
  images: [ 
    "assets/controls2.jpg",
    "assets/controls3.jpg",
    "assets/controls4.jpg",
    "assets/controls5.jpg",
    "assets/controls6.jpg",
    "assets/controls7.jpg",
    "assets/controls8.jpg"
  ],
  oneLiner: "Simulated aircraft dynamics and controller performance using MATLAB and classical control theory.",
  description:
    "These MATLAB-based control systems homework projects focused on modeling spacecraft and aircraft dynamics and designing feedback controllers using classical control methods. I analyzed system stability, tuned controller parameters, and validated system response to various disturbances and flight conditions.",
  highlights: [
    "Modeled aircraft flight dynamics using linearized state-space equations",
    "Designed PID and lead-lag controllers for pitch and attitude control",
    "Analyzed system response via Bode plots, root locus, and step response",
    "Simulated disturbance rejection and controller robustness in MATLAB"
  ],
  tools: ["MATLAB", "Control Systems", "Flight Dynamics", "Modeling & Simulation"],
  links: []
},

  {
    id: "wake",
    title: "Aircraft Wake Modeling & Analysis — Aerodynamics (AEM 313)",
    category: "academic",
    timeframe: "Course Project",
    image: "assets/wake.jpg",
    oneLiner: "Analyzed aircraft wake behavior using aerodynamic theory and computational methods.",
    description:
      "Aerodynamics course project focused on modeling wake formation and induced effects to better understand lift, drag, and downstream flow behavior.",
    highlights: [
      "Modeled wake characteristics using aerodynamic principles",
      "Analyzed induced velocities and flow behavior",
      "Interpreted results to connect theory with physical intuition",
    ],
    tools: ["Aerodynamics", "MATLAB", "Data Analysis"],
    links: [],
  },

  {
    id: "orbital",
    title: "Orbital Mechanics Mission Design — MATLAB Project (AEM 368)",
    category: "academic",
    timeframe: "Course Project",
    image: "assets/orbital.jpg",
    video: "assets/orbital.mp4",          
    oneLiner: "Designed and analyzed spacecraft trajectories using orbital mechanics principles.",
    description:
      "MATLAB-based spacecraft mission design project applying orbital mechanics theory and the method of patched conics to interplanetary trajectories.",
    highlights: [
      "Simulated multi-leg interplanetary missions using the patched conics method",
      "Computed delta-V, time-of-flight, and phase angle requirements for each trajectory segment",
      "Generated static trajectory plots and frame-by-frame MATLAB animations to visualize spacecraft motion",
      "Adhered to course MATLAB code structure and style constraints"
    ],
    tools: ["MATLAB", "Orbital Mechanics", "Modeling & Simulation"],
    links: [],
  },

  {
  id: "cfd420",
  title: "Computational Fluid Dynamics — Final and Side Projects (AEM 420)",
  category: "academic",
  timeframe: "Final Project",
  image: "assets/cfdfinal.jpg",
  images: [
    "assets/cfdairfoil.jpg",
    "assets/cfdnozzle.jpg",
    "assets/cfdductflow.jpg"
  ],
  oneLiner: "CFD-based flow analysis of an aerospace-relevant configuration.",
  description:
    "Comprehensive CFD project involving geometry setup, meshing, solver selection, and post-processing to analyze flow behavior.",
  highlights: [
    "Generated meshes and configured CFD solvers",
    "Analyzed pressure, velocity, and flow features",
    "Produced a formal technical report summarizing findings",
  ],
  tools: ["Ansys", "CFD", "Modeling & Simulation", "Technical Writing"],
  links: [
    { label: "Download Report (PDF) [Coming soon!]", href: "assets/cfd420_report.pdf" }
  ],
},


  {
    id: "structures",
    title: "Cylindrical Pressure Vessel Buckling — Aerospace Structures (AEM 351)",
    category: "academic",
    timeframe: "AIAA Report",
    image: "assets/351.jpg",
    oneLiner: "Structural analysis and buckling evaluation of cylindrical pressure vessels.",
    description:
      "Selected AIAA-style lab reports analyzing buckling behavior in aerospace pressure vessels using analytical and computational approaches.",
    highlights: [
      "Evaluated buckling failure modes under pressure loading",
      "Applied aerospace structures theory to practical cases",
      "Authored AIAA-formatted technical reports",
    ],
    tools: ["Structures", "MATLAB", "Technical Writing"],
    links: [
      { label: "Download Report (PDF) [Coming soon!]", href: "assets/aem351_structures_report.pdf" },
    ],
  },

  {
    id: "xfoil",
    title: "Airfoil Performance Analysis — XFOIL Project (AEM 313)",
    category: "academic",
    timeframe: "Course Project",
    image: "assets/xfoil.jpg",
    oneLiner: "Analyzed airfoil performance characteristics using XFOIL.",
    description:
      "Aerodynamics project using XFOIL to evaluate lift, drag, and stall behavior across operating conditions.",
    highlights: [
      "Generated airfoil polars using XFOIL",
      "Analyzed performance trends with angle of attack",
      "Compared theoretical expectations to computational results",
    ],
    tools: ["XFOIL", "Aerodynamics", "Data Analysis"],
    links: [
      { label: "Download Report (PDF) [Coming soon!]", href: "assets/xfoil_airfoil_project.pdf" },
    ],
  },

  {
    id: "linalg",
    title: "Linear Algebra Applications — MATLAB Project (MATH 237)",
    category: "academic",
    timeframe: "Course Project",
    image: "assets/linalg.jpg",
    oneLiner: "Applied linear algebra concepts to computational problem solving.",
    description:
      "MATLAB project demonstrating how linear algebra can be used to encode and decode messages through matrix transformations. The project applies matrix multiplication and inversion to encrypt a message and recover the original data, illustrating the practical role of linear algebra in information encoding and computational problem solving.",
    highlights: [
      "Second time using MATLAB to solve a technical problem",
      "Constructed an invertible encoding matrix to encrypt structured data",
      "Applied matrix inversion to decode and recover the original message",
      "Verified matrix operations in MATLAB, ensuring accurate reconstruction",
    ],
    tools: ["MATLAB"],
    links: [],
  },

  {
    id: "diffEq",
    title: "Applied Differential Equations Modeling — MATLAB Project (MATH 238)",
    category: "academic",
    timeframe: "Course Project",
    image: "assets/diffeq.jpg",
    oneLiner: "Modeled dynamic systems using differential equations and numerical solvers.",
    description:
      "Project focused on solving and interpreting differential equation models representing physical systems.",
    highlights: [
      "First introduction to MATLAB problem solving",
      "Formulated ODE models from physical systems",
      "Implemented Euler’s method in MATLAB and compared numerical solutions to exact solutions",
      "Visualized system behavior using solution plots and direction fields to analyze transient and long-term behavior",
    ],
    tools: ["MATLAB", "Numerical Methods"],
    links: [
      { label: "Download Report (PDF)", href: "assets/diffeq.pdf" },
    ],
  },

  {
    id: "rocketAlgo",
    title: "Algorithm Devl & Implementation — Python Project (AEM 249)",
    category: "academic",
    timeframe: "Course Project",
    image: "assets/rocketsimulation.jpg",
    oneLiner: "Python-based simulation of rocket flight and fuel mass requirements.",
    description:
      "Algorithm development project simulating rocket flight dynamics to estimate fuel mass and trajectory behavior.",
    highlights: [
      "First time using programming to solve an engineering problem",
      "Developed Python algorithms for rocket flight simulation",
      "Computed fuel mass requirements based on mission constraints",
      "Visualized trajectory and performance metrics",
    ],
    tools: ["Python", "Algorithm Development", "Modeling & Simulation"],
    links: [],
  },

  {
    id: "flightMech",
    title: "Aircraft Performance Analysis — Flight Mechanics MATLAB Project (AEM 368)",
    category: "academic",
    timeframe: "Course Project",
    image: "assets/flimech.jpg",
    oneLiner: "Analyzed aircraft performance metrics using flight mechanics theory.",
    description:
      "MATLAB-based aircraft performance analysis project applying flight mechanics principles to evaluate and compare the performance characteristics of propeller-driven and jet aircraft. The project computes and visualizes key performance metrics across altitude and operating conditions, translating analytical flight mechanics equations into comprehensive, simulation-driven performance assessments.",
    highlights: [
      "Evaluated aircraft performance using flight mechanics equations implemented in MATLAB",
      "Analyzed altitude and operating-condition sensitivity across multiple performance metrics",
      "Visualized results through performance curves, envelopes, and constraint diagrams",
      "Adhered to MATLAB code style restrictions",
    ],
    tools: ["MATLAB", "Flight Mechanics", "Performance Analysis"],
    links: [],
  },

  {
    id: "compressible",
    title: "Shock Interaction Analysis — Compressible Flow MATLAB Project (AEM 413)",
    category: "academic",
    timeframe: "Course Project",
    image: "assets/compflow.jpg",
    oneLiner: "Modeled the intersection of oblique shocks using compressible flow theory.",
    description:
      "MATLAB-based analysis of intersecting shock waves, emphasizing compressible flow relations and solution verification.",
    highlights: [
      "Applied compressible flow and shock relations",
      "Solved intersection conditions numerically",
      "Visualized pressure and flow property changes",
    ],
    tools: ["MATLAB", "Numerical Analysis"],
    links: [],
  },

  {
  id: "glider",
  title: "Introduction to Aerospace Engineering — Glider Project (AEM 121)",
  category: "Academic",
  timeframe: "Final Project",
  image: "assets/glider.jpg", // main image
  images: [
    "assets/glider1.jpg"
  ],
  oneLiner: "Designed, built, and tested a custom glider to meet performance, budget, and materials constraints.",
  description:
    "Introductory hands-on aerospace project focused on designing a low-cost, hand-launched glider that could carry a payload. The project involved airfoil shaping, structural design, and empirical testing of various flight parameters.",
  highlights: [
    "First hands-on aerospace design, fabrication, and testing experience",
    "Custom asymmetric airfoil shaped from foam to maximize low-speed lift",
    "Payload bay and structure designed within budget and weight constraints",
    "Tested performance by varying angle of attack, payload mass, and launch profile"
  ],
  tools: ["Foam Cutting", "Airfoil Design", "Flight Testing"],
  links: [],
},


  // =====================
  // EXTRACURRICULAR
  // =====================
  {
    id: "fsae",
    title: "Crimson Racing — Formula SAE (Aerodynamics)",
    category: "extracurricular",
    timeframe: "Feb 2024 — Mar 2025",
    image: "assets/fsae.jpg",
    oneLiner: "CFD and composite optimization for Formula SAE aerodynamic components.",
    description:
      "Aerodynamics support for Formula SAE, including CFD and FEA work to improve undertray performance and composite manufacturing.",
    highlights: [
      "Conducted CFD to optimize airflow and reduce drag",
      "Supported composite layup processes",
      "Assisted with testing and rapid iteration during drive days",
    ],
    tools: ["Ansys", "CFD", "FEA", "Composites"],
    links: [],
  },
  {
    id: "ara",
    title: "Alabama Rocketry Association — Liquid Bi-Prop Rocket",
    category: "extracurricular",
    timeframe: "Sep 2022 — Present",
    image: "assets/rocket.jpg",
    oneLiner: "Design, testing, and fabrication of liquid rocket subsystems.",
    description:
      "Team contributions to a single-stage liquid bi-propellant rocket including design, hydrostatic testing, and test infrastructure.",
    highlights: [
      "Designed a single-stage liquid bi-propellant rocket for the DPF challenge",
      "Conducted hydrostatic pressure testing using ASME 1.5× FoS",
      "Designed and manufactured igniters, flame trench, test stand, and P&ID",
    ],
    tools: ["Testing", "Fabrication", "Manufacturing"],
    links: [],
  },

  // =====================
  // RESEARCH
  // =====================
  {
  id: "htil",
  title: "Human Technology Interaction Lab (HTIL) — Undergraduate Research Assistant",
  category: "research",
  timeframe: "Feb 2025 — Present",
  image: "assets/radar.jpg", // main image
  video: "assets/aimlvideo.mp4",  // additional video underneath
  oneLiner: "Brain-computer interfaces for drone control using neural signals.",
  description:
    "Undergraduate research exploring brain-computer interfaces for drone control within the Brain-Drone Race framework.",
  highlights: [
    "Researched neural signal-based drone control",
    "Familiarized myself with AI/ML in PyTorch",
    "Created a game using Phaser.js to teach radar behavior to high school students",
  ],
  tools: ["Research", "AI/ML", "Phaser.js", "PyTorch"],
  links: [
    {
      label: "Visit Lab Website",
      href: "https://htilua.org/"
    }
  ],
},

  {
  id: "aaero",
  title: "A.A.E.R.O. — FPV Drone & Propeller Optimization",
  category: "research",
  timeframe: "Nov 2024 — Present",

  // Card / thumbnail image
  image: "assets/aero.jpg",

  // Modal gallery images (displayed horizontally)
  images: [
    "assets/dronebuilding.jpg",
    "assets/urca.jpg"
  ],

  oneLiner: "CFD-driven propeller optimization with experimental validation.",
  description:
    "Co-founded a student-led aerospace research group with peers to investigate UAV performance and advanced propeller geometries. Designed and built a custom FPV drone platform, then conducted CFD-driven propeller optimization studies followed by rapid prototyping and experimental validation to evaluate performance.",
  highlights: [
    "Optimized and compared multiple propeller geometries using CFD and aerodynamic performance analysis",
    "Validated designs through wind-tunnel and experimental thrust/noise testing",
    "Integrated drone electrical systems through precision soldering and flight-ready assembly",
  ],
  tools: ["CFD", "3D Printing", "Testing", "Soldering"],
  links: [],
},

],


  // Experience timeline (from your resume)
  experience: [
    {
      when: "Sep 2025 — Present",
      title: "STEM Business Honors Senior Project",
      org: "STEM Business Honors VII (GBA 571)",
      logo: "assets/mda.jpg",
      bullets: [
        "Worked as a business partner alongside MDA to create an integrated air and missile defense system concept.",
      ],
    },
    /*{
      when: "Sep 2025 — Present",
      title: "Aerodynamics Systems Lead / Chief Technical Writer",
      org: "FFVTOL Senior Design Project",
      bullets: [
        "Designed, manufactured, tested, and optimized a fixed-wing modular reconnaissance aircraft with gimbal VTOL capability.",
      ],
    },
    {
      when: "May 2025 — Aug 2025",
      title: "Modeling and Simulation Intern",
      org: "The Aerospace Corporation",
      bullets: [
        "Developed commands and scripts in AFSIM to simulate scheduled instantaneous field of view.",
        "Created an MBSE schema in Cameo Systems Modeler to map program and enterprise capabilities.",
      ],
    },
    {
      when: "Feb 2025 — Present",
      title: "Undergraduate Research Assistant",
      org: "Human Technology Interaction Lab",
      bullets: [
        "Researched brain-computer interfaces for the Brain-Drone Race using neural signals to control drones.",
      ],
    },
    {
      when: "Nov 2024 — Present",
      title: "Systems Engineering Lead / Chief Technical Writer",
      org: "A.A.E.R.O.",
      bullets: [
        "Built a custom FPV drone; supported flight control systems optimization.",
        "Optimized propeller design via CFD, 3D printing, and stand testing.",
        "Soldered wiring to the flight controller using flux for reliable integration.",
      ],
    },
    {
      when: "Feb 2024 — Mar 2025",
      title: "Aerodynamics Team Member",
      org: "Crimson Racing (Formula SAE)",
      bullets: [
        "Conducted CFD to optimize airflow and minimize drag on the undertray.",
        "Executed composite layup processes for smooth geometry.",
      ],
    },
    {
      when: "Sep 2022 — Present",
      title: "Liquids/Solids/Business Team Member",
      org: "Alabama Rocketry Association (ARA)",
      bullets: [
        "Designed a single-stage liquid bi-propellant rocket for the DPF challenge.",
        "Conducted hydrostatic pressure tests on aluminum tanks using ASME’s 1.5x FoS.",
        "Designed/researched/manufactured igniters, test stand, flame trench, and P&ID.",
      ],
    }, */
    {
      when: "Apr 2025 — Present",
      title: "Membership Chair",
      org: "Vertical Flight Society (VFS)",
      bullets: [
        "Oversaw member recruitment and engagement to boost chapter involvement and retention.",
      ],
    },
    {
      when: "Jan 2024 — Present",
      title: "Sport Programs Supervisor",
      org: "University Recreation / Intramurals",
      bullets: [
        "Organized intramural competitions, maintained facilities, oversaw officials, and taught as a clinician.",
      ],
    },
    {
      when: "Sep 2022 — Present",
      title: "T.O.R.C.H Chair",
      org: "National Society of Black Engineers (NSBE)",
      bullets: [
        "Led workshops on technical skills; promoted STEM through service and outreach events.",
        "Fundraised, networked, and attended company meetings for professional development.",
      ],
    },
  ],
};

// =======================
// 2) UTILITIES
// =======================
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function safeSetImage(imgEl, src, fallbackBg = true) {
  imgEl.src = src;
  imgEl.onerror = () => {
    imgEl.removeAttribute("src");
    imgEl.alt = "Image unavailable";
    if (fallbackBg) imgEl.style.display = "none";
  };
}

function prettyCategory(cat) {
  if (cat === "academic") return "Academic";
  if (cat === "extracurricular") return "Extracurricular";
  if (cat === "research") return "Research";
  return cat;
}

// =======================
// 3) RENDER: HERO + ABOUT
// =======================
function renderHero() {
  $("#heroKicker").textContent = SITE.heroKicker;
  $("#heroSubtitle").textContent = SITE.heroSubtitle;

  safeSetImage($("#headshot"), SITE.headshot);

  const chips = $("#heroChips");
  chips.innerHTML = "";
  SITE.strengths.forEach((s) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.innerHTML = `<strong>•</strong> ${s}`;
    chips.appendChild(span);
  });

  // Stats
  const [s1, s2, s3] = SITE.stats;
  $("#stat1Num").textContent = s1.num; $("#stat1Label").textContent = s1.label;
  $("#stat2Num").textContent = s2.num; $("#stat2Label").textContent = s2.label;
  $("#stat3Num").textContent = s3.num; $("#stat3Label").textContent = s3.label;
}

function renderAbout() {
  const aboutList = $("#aboutBullets");
  aboutList.innerHTML = "";
  SITE.aboutBullets.forEach((b) => {
    const li = document.createElement("li");
    li.textContent = b;
    aboutList.appendChild(li);
  });

  const interests = $("#interestTags");
  interests.innerHTML = "";
  SITE.interests.forEach((t) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = t;
    interests.appendChild(span);
  });

  const hobbies = $("#hobbyTags");
  hobbies.innerHTML = "";
  SITE.hobbies.forEach((t) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = t;
    hobbies.appendChild(span);
  });
}

// =======================
// 4) RENDER: PROJECTS
// =======================
let activeFilter = "All";

function renderProjects() {
  const grid = $("#projectGrid");
  grid.innerHTML = "";

  const items = SITE.projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (p.category === "All-only") return false;
    return p.category === activeFilter;
  });


  if (items.length === 0) {
    grid.innerHTML = `<p class="muted">No projects match this filter yet. Add one in <code>script.js</code> → SITE.projects.</p>`;
    return;
  }

  items.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card project";
    card.dataset.category = p.category;

    card.innerHTML = `
      <div class="project__thumb">
        <img alt="${p.title}" loading="lazy" />
      </div>
      <div class="project__meta">
        <h3 class="project__title">${p.title}</h3>
      </div>
      <div class="project__meta">
        <span class="badge">${prettyCategory(p.category)}</span>
        <span class="muted" style="font-weight:700; font-size:12px;">${p.timeframe}</span>
      </div>
      <p class="project__desc">${p.oneLiner}</p>
      <div class="tags">
        ${p.tools.slice(0, 4).map(t => `<span class="tag">${t}</span>`).join("")}
      </div>
      <div class="project__actions">
        <button class="btn btn--primary" data-open="${p.id}" type="button">Details</button>
        <a class="project__more" href="#contact" aria-label="Contact Eliel about ${p.title}">Contact →</a>
      </div>
    `;

    safeSetImage(card.querySelector("img"), p.image);
    grid.appendChild(card);
  });

  // Hook up modal open
  $$("button[data-open]").forEach((btn) => {
    btn.addEventListener("click", () => openProject(btn.dataset.open));
  });
}

function setFilter(next) {
  activeFilter = next;
  $$(".chip").forEach((c) => {
    const isActive = c.dataset.filter === next;
    c.classList.toggle("chip--active", isActive);
    c.setAttribute("aria-selected", String(isActive));
  });
  renderProjects();
}

// =======================
// 5) MODAL
// =======================
const modal = $("#projectModal");

function openProject(id) {
  const p = SITE.projects.find((x) => x.id === id);
  if (!p) return;

  $("#modalTitle").textContent = p.title;
  $("#modalDesc").textContent = p.description;
  $("#modalCategory").textContent = `${prettyCategory(p.category)} • ${p.timeframe}`;

const imgWrap = $("#modalImg");
imgWrap.innerHTML = "";
imgWrap.style.display = "flex";
imgWrap.style.flexDirection = "row";
imgWrap.style.overflowX = "auto";
imgWrap.style.gap = "1rem";
imgWrap.style.paddingBottom = "1rem";


/*
MEDIA RENDER ORDER:
1) image (main image)
2) images[] gallery
3) video
*/

// 1) MAIN IMAGE (HTIL, most projects)
if (p.image) {
  const img = document.createElement("img");
  img.className = "modal__img";
  img.alt = p.title;
  img.loading = "lazy";
  safeSetImage(img, p.image);
  imgWrap.appendChild(img);
}

// 2) IMAGE GALLERY (A.A.E.R.O., CFD)
if (p.images && p.images.length) {
  p.images.forEach(src => {
    const img = document.createElement("img");
    img.className = "modal__img";
    img.alt = p.title;
    img.loading = "lazy";
    safeSetImage(img, src);
    imgWrap.appendChild(img);
  });
}

// 3) VIDEO (Orbital, HTIL)
if (p.video) {
  const video = document.createElement("video");
  video.className = "modal__img";
  video.src = p.video;
  video.controls = true;
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  imgWrap.appendChild(video);
}

  const bullets = $("#modalBullets");
  bullets.innerHTML = "";
  p.highlights.forEach((h) => {
    const li = document.createElement("li");
    li.textContent = h;
    bullets.appendChild(li);
  });

  const tools = $("#modalTools");
  tools.innerHTML = "";
  p.tools.forEach((t) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = t;
    tools.appendChild(span);
  });

  const links = $("#modalLinks");
  links.innerHTML = "";
  if (p.links && p.links.length) {
    p.links.forEach((l) => {
      const a = document.createElement("a");
      a.className = "btn";
      a.href = l.href;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = l.label;
      links.appendChild(a);
    });
  } else {
    const note = document.createElement("p");
    note.className = "muted";
    //note.textContent = "Links coming soon — add them in script.js (project.links).";
    links.appendChild(note);
  }

  modal.showModal();
}

function closeModal() {
  if (modal.open) modal.close();
}

// =======================
// 6) RENDER: EXPERIENCE, SKILLS, EDUCATION, AWARDS, CONTACT
// =======================
function renderExperience() {
  const wrap = $("#experienceTimeline");
  wrap.innerHTML = "";

  SITE.experience.forEach((r) => {
    const el = document.createElement("article");
    el.className = "role";

 el.innerHTML = `
  <div class="role__when">${r.when}</div>
  <div>
    <h3 class="role__title">${r.title}</h3>
    <p class="role__org">${r.org}</p>
    <ul class="list role__bullets">
      ${r.bullets.map(b => `<li>${b}</li>`).join("")}
    </ul>
  </div>
`;







    wrap.appendChild(el);
  });
}

function renderSkills() {
  const renderTags = (id, items) => {
    const root = $(id);
    root.innerHTML = "";
    items.forEach((t) => {
      const span = document.createElement("span");
      span.className = "tag";
      span.textContent = t;
      root.appendChild(span);
    });
  };

  renderTags("#skillsTech", SITE.skills.technical);
  renderTags("#skillsEng", SITE.skills.engineering);
  renderTags("#skillsComm", SITE.skills.communication);
}

function renderEducation() {
  $("#eduTitle").textContent = SITE.education.title;
  $("#eduMeta").textContent = SITE.education.meta;

  const tags = $("#eduTags");
  tags.innerHTML = "";
  SITE.education.tags.forEach((t) => {
    const span = document.createElement("span");
    span.className = "tag";
    span.textContent = t;
    tags.appendChild(span);
  });

  const list = $("#courseworkList");
  list.innerHTML = "";
  SITE.education.coursework.forEach((c) => {
    const li = document.createElement("li");
    li.textContent = c;
    list.appendChild(li);
  });
}

function renderAwards() {
  const grid = $("#awardsGrid");
  grid.innerHTML = "";

  SITE.awards.forEach((a) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `<h3>${a.title}</h3><p class="muted">${a.detail}</p>`;
    grid.appendChild(card);
  });
}

function renderContact() {
  const list = $("#contactList");
  list.innerHTML = "";

  SITE.contact.forEach((c) => {
    const row = document.createElement("div");
    row.className = "contact-item";
    row.innerHTML = `
      <div>
        <small>${c.label}</small><br/>
        <a href="${c.href}" target="${c.href.startsWith("http") ? "_blank" : "_self"}" rel="noopener">${c.value}</a>
      </div>
      <span class="badge">Open</span>
    `;
    list.appendChild(row);
  });
}

// =======================
// 7) INTERACTIONS: NAV, THEME, FORM
// =======================
function setupNavToggle() {
  const btn = $("#navToggle");
  const links = $("#navLinks");

  btn.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
  });

  // close menu after click on mobile
  $$("#navLinks a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

function setupTheme() {
  const btn = $("#themeToggle");
  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

function setupFilters() {
  $$(".chip").forEach((chip) => {
    chip.addEventListener("click", () => setFilter(chip.dataset.filter));
  });
}

function setupModal() {
  $("#modalClose").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog =
      rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width;
    if (!isInDialog) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function setupForm() {
  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("name");
    const email = data.get("email");
    const msg = data.get("message");

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
    const to = SITE.contact.find((x) => x.label === "Email")?.value || "ejsmith19@crimson.ua.edu";

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}

// =======================
// 8) INIT
// =======================
function init() {
  renderHero();
  renderAbout();
  renderProjects();
  renderExperience();
  renderSkills();
  renderEducation();
  renderAwards();
  renderContact();

  setupNavToggle();
  setupTheme();
  setupFilters();
  setupModal();
  setupForm();

  $("#year").textContent = new Date().getFullYear();
}

init();

//javascript scroll to top  function

document.getElementById("scrollToTopBtn").addEventListener("click", function (e) {
  e.preventDefault(); // stops default anchor behavior
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
