const pass = document.getElementById('password');
const passConfirm = document.getElementById('confirmPassword');

function alert() {
    if (pass !== passConfirm) {
        return "Password doesn't match";
    }
}