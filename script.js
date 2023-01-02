const pswField = document.getElementById('password');
const confirmPswField = document.getElementById('confirm-password');
const error = pswField.parentElement.querySelector('.error');
const form = document.getElementById('form');

const checkPassword = () => {
    return pswField.value === confirmPswField.value;
}

const showError = () => {
    if (!checkPassword()) {
        error.classList.add('active');
        pswField.setCustomValidity('Invalid field.');
        confirmPswField.setCustomValidity('Invalid field.');
    }
    else {
        error.classList.remove('active');
        pswField.setCustomValidity('');
        confirmPswField.setCustomValidity('');
    }
}

pswField.addEventListener('keyup', showError, false);
confirmPswField.addEventListener('keyup', showError, false);

form.addEventListener('submit', (e) => {
    if (!checkPassword()) {
        showError();
        e.preventDefault();
        return false;
    }
    return true;
});