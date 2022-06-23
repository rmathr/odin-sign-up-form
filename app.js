const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
const phoneNumber = document.getElementById('phoneNumber');
const submitButton = document.getElementById('submitButton');
const passwordError = document.getElementById('passwordError');

let passwordValue;
let passwordConfirmValue;

submitButton.addEventListener('click', ()=> {
    passwordValue = password.value;
    passwordConfirmValue = passwordConfirm.value;
    if(passwordValue !== passwordConfirmValue){
        passwordError.textContent= "* Passwords do not match";
    } 
});

