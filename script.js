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
function SendMail() {
  let fullname = document.getElementById('Voornaam').value + document.getElementById('Achternaam').value;
  var params = {
    from_name: fullname.value,
    email_id: document.getElementById('Email').value,
    Bedrijf: getElementById('Bedrijf').value,
    message: document.getElementById('Bericht').value
  }
  emailjs.sendForm('service_1avkiuq', 'template_zeqpyzk', this)
    .then(() => {
      alert('SUCCESS!');
    }, (error) => {
      alert('FAILED...', error);
    });
}