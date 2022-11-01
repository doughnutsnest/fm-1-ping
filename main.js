const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('error');
const submit = document.getElementById('submit');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const emailValue = email.value.trim();
    let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

    if (emailValue === '') {
        setErrorNull();
    } else if (emailValue.match(mailRegex)) {
        setSuccessFor();
    } else {
        setErrorFor();
    }
}

function setErrorNull() {
    email.className = 'email error';
    error.className = 'show';
    error.innerText = 'Whoops! It looks like you forgot to add your email'
}

function setErrorFor() {
    email.className = 'email error';
    error.className = 'show';
    error.innerText = 'Please provide a valid email address'
}

function setSuccessFor() {
    submit.className = 'submit grey-out';
    email.className = 'email hide';
    error.className = 'hide';
    submit.value = 'Thank you!';
}