var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[a-zA-Z]+$/)) {
        nameError.innerHTML = 'Write Full Name';
        return false;
    }
    nameError.innerHTML = 'Valid';
    return true;
}

function validatePhone() {
    var phone = document.getElementById('contact-phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone is required';
        return false;
    }
    if (!phone.match(/^[0-9]+$/)) {
        phoneError.innerHTML = 'Only Numbers';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Invalid Phone Number';
        return false;
    }

    phoneError.innerHTML = 'Valid';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        emailError.innerHTML = 'Invalid Email';
        return false;
    }

    emailError.innerHTML = 'Valid';
    return true;
}

function validateMessage() {
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        message.innerHTML = left + ' characters left';
        return false;
    }

    messageError.innerHTML = 'Valid';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.innerHTML = 'Please fill all the fields correctly';
        return false;
    }
}