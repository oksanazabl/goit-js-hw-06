
const [input, btnCreate, btnDestroy] = [
  ...document.querySelector("#controls").children,
];

const elem = {
  input,
  btnCreate,
  btnDestroy,
  boxes: document.querySelector('#boxes'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = (amount) => {
  const arrey = [];
  let size = 30;
  elem.boxes.innerHTML = "";
  for (let i = 0; i < amount; i = +1){
    const div = document.createElement('div');
    div.style.width = div.style.height = size +"px";
    div.style.backgroundColor = getRandomHexColor();
    arrey.push(div);
    size += 10;
  }
  elem.boxes.append(...arrey);
}

elem.btnCreate.addEventListener('click', createBoxes);
elem.btnDestroy.addEventListener('click', () => {
  elem.input.value = "";
  elem.boxes.innerHTML = "";
});