const scriptURL = 'https://script.google.com/macros/s/AKfycbxK6KEvyJLde2TRbkq-mC1_qkBuz99wQ1a7Oyr-t8fz8Z3ZqyiohlnNkTUcouUf18Q2/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Your message is sent successfully!." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

