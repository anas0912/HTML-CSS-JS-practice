//retrieving HTML elements from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//All Functions
// Function to update class & message for errors

function showError(input, message) {
    //Get the parent element from the input field (.form-control)
    const formControl = input.parentElement;
    //Replace the class - add error
    formControl.className = 'form-control error';
    //Get the small element for the error message
    const small = formControl.querySelector('small');
    //Replace the text for small element using the input message
    small.innerText = message;
}

//Function to update class for success 

function showSuccess(input) {

    //Get the parent element from the input field (.form-control)
    const formControl = input.parentElement;
    //Replace the class - add success
    formControl.className = 'form-control success';
}


function isValidEmail(email) {
    const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email));
}

//Event Listeners
//create event listener for submit button
form.addEventListener('submit', function(e) {
    //stop page from reloading
    e.preventDefault();

    //Check to see if fields meet required field requirement

    // check if username is empty
    if (username.value === '') {
        showError(username, 'Username is required')
    } else {
        showSuccess(username);
    }

    // check if email is empty
    if (email.value === '') {
        showError(email, 'Email is required')
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is invalid')

    } else {
        showSuccess(email);
    }

    // check if password is empty
    if (password.value === '') {
        showError(password, 'Password is required')
    } else {
        showSuccess(password);
    }

    // check if Confirm password is empty
    if (password2.value === '') {
        showError(password2, 'Confirm Password is required')
    } else {
        showSuccess(password2);
    }

});