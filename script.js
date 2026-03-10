let emailInputElement = document.getElementById('emailInput');
let optInputElement = document.getElementById('optInputElement');
let section_home = document.getElementById('section-Home');
let section_signin = document.getElementById('section_sign_in');


function sendOtp() {
    if (emailInputElement.value === '') {
        alert('enter mail')
        optInputElement.classList.add('d-none');
    } else {
        optInputElement.classList.remove('d-none');
    }
}

function gotoHome() {
    section_home.classList.remove('d-none');
    section_signin.classList.add('d-none');
}

function onsignInButton() {
    section_home.classList.add('d-none');
    section_signin.classList.remove('d-none');
}