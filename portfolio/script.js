const ham = document.querySelector("#ham");
const menu = document.querySelector("#menu");
const navLinks = document.querySelectorAll("#menu li");

ham.addEventListener("click", () => {
  menu.classList.toggle("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    const a = link.querySelector("a");

    if (a.getAttribute("href") === "resume/RESUME.pdf") {
      if (menu.classList.contains("active")) {
          menu.classList.remove("active");
      }
      return;
    }

    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    }

    const sectionId = a.dataset.section;

    if (sectionId) {
      e.preventDefault();
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(sectionId).classList.add('active');

      navLinks.forEach(navLink => {
          navLink.querySelector("a").classList.remove('active');
      });
      a.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('home').classList.add('active');
    navLinks.forEach(navLink => {
        const a = navLink.querySelector("a");
        if (a.dataset.section === "home") {
            a.classList.add('active');
        }
});
});

document.addEventListener('DOMContentLoaded', () => {
  const projectBoxes = document.querySelectorAll('.project-section');
  projectBoxes.forEach(box => {
    box.addEventListener('click', () => {
      const projetId = box.getAttribute('data-project');
      const modal = document.getElementById('modal-' + projetId);
      if (modal) {
        modal.style.display = 'flex';
      }
    });
  });

  const closeButtons = document.querySelectorAll('.close');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-close');
      const modalToClose = document.getElementById(target);
      if (modalToClose) {
        modalToClose.style.display = 'none';
      }
    });
  });

  const allModals = document.querySelectorAll('.project-modal');
  allModals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});

// ———————————————————————————————————————————————
// Ouverture / fermeture de la modale “Portfolio d’apprentissage”
// ———————————————————————————————————————————————

// Quand on clique sur la boîte “Portfolio d’apprentissage”
const btnLearning = document.getElementById('btn-learning');
btnLearning.addEventListener('click', () => {
  const modalLearning = document.getElementById('modal-learning');
  if (modalLearning) {
    modalLearning.style.display = 'flex';
  }
});