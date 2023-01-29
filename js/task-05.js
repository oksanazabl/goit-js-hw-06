const input = document.querySelector('#name-input');
const nameNew = document.querySelector('#name-output');

input.addEventListener('input', onInput);

function onInput(event) {
   
    nameNew.textContent =
        event.currentTarget.value.trim().length !== 0 ? event.currentTarget.value : "Anonimus";
    console.log(event.currentTarget.value);
}