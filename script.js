/*
  EDIT YOUR PORTFOLIO HERE
  Add, remove, or change projects in the projects array.
  Replace each image URL with your own image (a path like "images/my-art.jpg" works too).
*/
const projects = [
  {title:"Soft Geometry",type:"painting",label:"PAINTING",year:"2026",image:"https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1400&q=85",alt:"Abstract colorful painting",description:"A study of shape, balance, and the energy that appears when simple forms meet."},
  {title:"Afterimage 02",type:"digital",label:"DIGITAL STUDY",year:"2025",image:"https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=85",alt:"Expressive abstract artwork",description:"An ongoing series of digital compositions built from fragments, color fields, and memory."},
  {title:"Objects for Pause",type:"objects",label:"OBJECTS",year:"2025",image:"https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1400&q=85",alt:"Framed artwork in a gallery",description:"Small sculptural experiments about the objects we keep and the spaces we give them."},
  {title:"Color Notes",type:"painting",label:"PAINTING",year:"2024",image:"https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1400&q=85",alt:"Bright abstract painting",description:"Loose color studies made quickly, without a plan, and edited only when they feel complete."},
  {title:"A Quiet Signal",type:"digital",label:"DIGITAL STUDY",year:"2024",image:"https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1400&q=85",alt:"Modern abstract artwork",description:"An exploration of rhythm, repetition, and visual noise in a quieter register."},
  {title:"Form / Function",type:"objects",label:"OBJECTS",year:"2023",image:"https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&w=1400&q=85",alt:"Colorful creative studio artwork",description:"A collection of playful one-off pieces where practical objects become little works of art."}
];

const grid = document.querySelector("#project-grid");
const dialog = document.querySelector(".project-dialog");
const dialogImage = document.querySelector(".dialog-image");

function renderProjects(filter = "all") {
  const visible = projects.filter(project => filter === "all" || project.type === filter);
  grid.innerHTML = visible.map(project => {
    const index = projects.indexOf(project);
    return `<article class="project-card" tabindex="0" role="button" aria-label="View ${project.title}" data-index="${index}">
      <div class="project-image"><img src="${project.image}" alt="${project.alt}" loading="lazy"><span class="project-view" aria-hidden="true">↗</span></div>
      <div class="project-meta"><div><div class="project-name">${project.title}</div><div class="project-type">${project.label}</div></div><span class="project-year">${project.year}</span></div>
    </article>`;
  }).join("");
  grid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => openProject(Number(card.dataset.index)));
    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openProject(Number(card.dataset.index)); }
    });
  });
}

function openProject(index) {
  const project = projects[index];
  dialogImage.src = project.image;
  dialogImage.alt = project.alt;
  dialog.querySelector(".dialog-category").textContent = project.label;
  dialog.querySelector("#dialog-title").textContent = project.title;
  dialog.querySelector(".dialog-description").textContent = project.description;
  dialog.querySelector(".dialog-year").textContent = project.year;
  dialog.showModal();
}

document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(item => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    renderProjects(button.dataset.filter);
  });
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

renderProjects();