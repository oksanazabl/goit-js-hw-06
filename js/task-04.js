let valueStart = 0;

const counterValue = document.querySelector("#value");
const btnMore = document.querySelector("#counter").firstElementChild;
const btnLess = document.querySelector("#counter").lastElementChild;

const clickAdd = () => {
    valueStart += 1;

    counterValue.textContent = valueStart
};
btnLess.addEventListener('click', clickAdd);

const clickLess = () => {
    valueStart -= 1;

    counterValue.textContent = valueStart
};
btnMore.addEventListener('click', clickLess);