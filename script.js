function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav li");

  function changeLinkState() {
      let index = sections.length;

      while (--index && window.scrollY + 10 < sections[index].offsetTop) { }

      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
  }

  changeLinkState();
  window.addEventListener("scroll", changeLinkState);
});

