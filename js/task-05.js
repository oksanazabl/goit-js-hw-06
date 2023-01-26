const input = document.querySelector('#name-input');
const nameNew = document.querySelector('#name-output');

input.addEventListener('input', onInput);

function onInput(event) {
   
    nameNew.textContent = event.currentTarget.value;
 console.log(event.currentTarget.value);
}