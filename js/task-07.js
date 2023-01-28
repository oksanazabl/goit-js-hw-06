const input = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

input.addEventListener('input', (e) => {
    spanEl.style.fontSize = e.currentTarget.value + "px";
});