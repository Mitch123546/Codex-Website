const data = window.PORTFOLIO_DATA;

const icons = {
  linkedin:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 10v8M8 7v.01M12 18v-4.5a3.5 3.5 0 0 1 7 0V18M12 10v8M5 10h6M5 18h6"/></svg>',
  email:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4zM4 7l8 6 8-6"/></svg>',
};

function populateProfile() {
  document.title = `${data.profile.name} | Engineering Portfolio`;
  document.querySelector("[data-profile-name]").textContent = data.profile.name;
  document.querySelector("[data-profile-tagline]").textContent = data.profile.tagline;
  document.querySelector("[data-nav-name]").textContent = data.profile.initials;
  document.querySelector("[data-footer-name]").textContent = data.profile.name;
  document.querySelector("[data-current-year]").textContent = new Date().getFullYear();

  const contactList = document.querySelector("[data-contact-list]");
  contactList.innerHTML = data.profile.contacts
    .map(
      (contact) => `
        <a class="contact-link" href="${contact.href}" ${
          contact.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""
        }>
          ${icons[contact.icon] || ""}
          <span><span class="sr-only">${contact.label}: </span>${contact.value}</span>
        </a>
      `,
    )
    .join("");

  document.querySelector("[data-about-copy]").innerHTML = data.profile.about
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  document.querySelector("[data-about-gallery]").innerHTML = data.profile.photos
    .map(
      (photo) => `
        <figure>
          <img src="${photo.src}" alt="${photo.alt}" loading="lazy" />
          ${photo.caption ? `<figcaption>${photo.caption}</figcaption>` : ""}
        </figure>
      `,
    )
    .join("");
}

function renderProjectCards(projects, section) {
  const grid = document.querySelector(`[data-project-grid="${section}"]`);
  grid.innerHTML = projects
    .map(
      (project, index) => `
        <button
          class="project-card"
          type="button"
          data-project-id="${project.id}"
          data-project-section="${section}"
          aria-haspopup="dialog"
        >
          <span class="project-card__image">
            <img src="${project.cover.src}" alt="${project.cover.alt}" loading="lazy" />
          </span>
          <span class="project-card__body">
            <span class="project-card__number">${String(index + 1).padStart(2, "0")}</span>
            <span class="project-card__title">${project.title}</span>
            <p>${project.summary}</p>
          </span>
        </button>
      `,
    )
    .join("");
}

const dialog = document.querySelector("[data-project-dialog]");
const dialogTitle = document.querySelector("[data-dialog-title]");
const dialogCategory = document.querySelector("[data-dialog-category]");
const dialogTags = document.querySelector("[data-dialog-tags]");
const dialogDescription = document.querySelector("[data-dialog-description]");
const dialogMedia = document.querySelector("[data-dialog-media]");

function mediaMarkup(media) {
  if (media.type === "video") {
    return `
      <figure>
        <video controls preload="metadata" ${media.poster ? `poster="${media.poster}"` : ""}>
          <source src="${media.src}" />
          Your browser does not support embedded video.
        </video>
        ${media.caption ? `<figcaption>${media.caption}</figcaption>` : ""}
      </figure>
    `;
  }

  return `
    <figure>
      <img src="${media.src}" alt="${media.alt || ""}" loading="lazy" />
      ${media.caption ? `<figcaption>${media.caption}</figcaption>` : ""}
    </figure>
  `;
}

function openProject(project, section) {
  dialogTitle.textContent = project.title;
  dialogCategory.textContent =
    section === "engineering" ? "Engineering project" : "Personal project";
  dialogTags.innerHTML = project.tags.map((tag) => `<span>${tag}</span>`).join("");
  dialogDescription.innerHTML = project.description
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
  dialogMedia.innerHTML = project.media.map(mediaMarkup).join("");
  dialog.showModal();
}

document.addEventListener("click", (event) => {
  const card = event.target.closest("[data-project-id]");
  if (!card) return;

  const section = card.dataset.projectSection;
  const projects =
    section === "engineering" ? data.engineeringProjects : data.personalProjects;
  const project = projects.find((item) => item.id === card.dataset.projectId);
  if (project) openProject(project, section);
});

document.querySelector("[data-dialog-close]").addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

dialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  dialog.close();
});

dialog.addEventListener("close", () => {
  dialog.querySelectorAll("video").forEach((video) => video.pause());
});

const header = document.querySelector("[data-header]");
const navLinks = [...document.querySelectorAll(".nav-links a")];

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.hash === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-30% 0px -60% 0px" },
);

document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));
window.addEventListener("scroll", updateHeader, { passive: true });

populateProfile();
renderProjectCards(data.engineeringProjects, "engineering");
renderProjectCards(data.personalProjects, "personal");
updateHeader();

