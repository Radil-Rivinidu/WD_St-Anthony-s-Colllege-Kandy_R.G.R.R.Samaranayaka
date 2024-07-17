const scriptURL = 'https://script.google.com/macros/s/AKfycbw4KZHtnKBespbLLhfvY5lBPYuN3SeUJzhD4TN8_jCewg8npFJ_z6dx-4K0wET7a7vfvQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

