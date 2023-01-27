let valueStart = 0;

const counterValue = document.querySelector("#value");
const btnMore = document.querySelector("#counter").firstElementChild;
const btnLess = document.querySelector("#counter").lastElementChild;

const clickAdd = () => {
    valueStart += 1;

    counterValue.innerHTML = valueStart
};
btnLess.addEventListener('click', clickAdd);

const clickLess = () => {
    valueStart -= 1;

    counterValue.innerHTML = valueStart
};
btnMore.addEventListener('click', clickLess);