//retrieving HTML elements from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = documet.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//create event listener for submit button

form.addEventListener('submit', function() {
    console.log('Submitted');

});