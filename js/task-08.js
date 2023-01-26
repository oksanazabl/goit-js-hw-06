const form = document.querySelector('.login-form');
const login = document.querySelector("email");
const pass = document.querySelector("password");
const btn = document.querySelector("submit");


form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
}