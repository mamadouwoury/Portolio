function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}



// Fonction pour ajouter la classe active au lien correspondant dans la barre de navigation
function setActiveLink(sectionId) {
  const navLinks = document.querySelectorAll('.nav-bar ul li a');

  // Supprimer la classe active de tous les liens
  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  // Trouver le lien correspondant à la section et lui ajouter la classe active
  navLinks.forEach(link => {
    if (link.classList.contains(`nav-${sectionId}`)) {
      link.classList.add('active');
    }
  });
}


