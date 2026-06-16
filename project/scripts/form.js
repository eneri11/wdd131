const contactForm = document.querySelector('#contact-form');
const formMessage = document.querySelector('#form-message');

contactForm.addEventListener('submit', event => {

    event.preventDefault();
});

    const fullname = document.querySelector('#fullname').value;

    formMessage.innerHTML = `
        <p>Thank you, ${fullname}. Your message has been sent.
