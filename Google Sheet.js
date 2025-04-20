const scriptURL = 'https://script.google.com/macros/s/AKfycbzUZclDH_TslSYGFEC_3TTSg4pv5wFaVXbPwU4O-mscq8oGzutisBqu0DD8lrQr3Dsm/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
