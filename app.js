const firstName = document.getElementById('firstName');
const firstNameError = document.getElementById('firstNameError');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
const phoneNumber = document.getElementById('phoneNumber');
const submitButton = document.getElementById('submitButton');
const passwordError = document.getElementById('passwordError');
const passwordErrorSymbol = document.getElementById('passwordErrorSymbol');
const inputs = document.querySelectorAll('.form-container input');
const inputsArray = [...inputs];


let passwordValue;
let passwordConfirmValue;

submitButton.addEventListener('click', validatePassword);


function validatePassword(){
    passwordValue = password.value;
    passwordConfirmValue = passwordConfirm.value;
    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(password.value.match(passRegex) && passwordConfirm.value.match(passRegex)){
        console.log("Match!");
        if(passwordValue !== passwordConfirmValue){
            passwordError.textContent= '⚠️ Passwords do not match.';
        }
    } else if (passwordValue == '' || passwordConfirmValue == ''){
        console.log("It's not a match!");
        passwordError.textContent= '⚠️ Your Password must not be blank.';
    } else {
        passwordError.textContent= '⚠️ Your Password must be at least 8 characters long, contain at least 1 number, 1 symbol and 1 uppercase character.';
    }
}


document.addEventListener('invalid', (function(){
    return function(e) {
      //prevent the browser from showing default error bubble / hint
      e.preventDefault();
      // optionally fire off some custom validation handler
      // myValidation();
    };
})(), true);


inputsArray.forEach(input => {
    input.addEventListener('invalid', 
    () => {
        switch(input.id){
            case 'firstName':
                if(firstName.value == ''){
                    input.nextElementSibling.textContent = "⚠️ First Name is required.";   
                } else {
                    input.nextElementSibling.textContent = "⚠️ First Name must have at least 2 characters.";
                }      
            break;
            case 'lastName':
                if(lastName.value == ''){
                    input.nextElementSibling.textContent = "⚠️ Last Name is required.";   
                } else {
                input.nextElementSibling.textContent = "⚠️ Last Name must have at least 2 characters.";
                }
            break;
            case 'email':
                if(email.value == ''){
                    input.nextElementSibling.textContent = "⚠️ Email is required.";   
                } else {
                input.nextElementSibling.textContent = "⚠️ Your Email must have the pattern: something@something.";
                }
            break;
            case 'phoneNumber':
                if(phoneNumber.value == ''){
                    input.nextElementSibling.textContent = "⚠️ Phone Number is required.";   
                } else {
                input.nextElementSibling.textContent = "⚠️ Your Phone number must have a minimum of 5 and a maximum of 15 digits.";
                }
            break;
        }
        console.log(input.id); 
    });
});
