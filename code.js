const fName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');

const phoneNumber = document.getElementById('phoneNumber');
const email = document.getElementById('eMail');
const pass = document.getElementById('password');
const passConfirm = document.getElementById('confirmPassword');


const errorDiv = document.getElementById('error');
const form = document.getElementById('form');

const passErrorDiv = document.getElementById('passwordError');
const cPassErrorDiv = document.getElementById('cPasswordError');

form.addEventListener('submit', (e) => {
    let errors = [];

    if(pass.value !== passConfirm.value) {
        errors.push("Passwords don't match");
        passErrorDiv.textContent = "Passwords don't match";
        cPassErrorDiv.textContent = "Passwords don't match";
    }
    
    if (errors.length > 0) {
        e.preventDefault();
    }
})