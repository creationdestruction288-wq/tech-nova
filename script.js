// FILE: script.js

// This function will run when the contact form is submitted
function handleFormSubmit(event) {
    event.preventDefault(); // This stops the page from refreshing
    const name = document.querySelector('input[type="text"]').value;
    alert("Thank you, " + name + "! Your message has been received.");
}

// Add an event listener to the form if it exists on the current page
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', handleFormSubmit);
}