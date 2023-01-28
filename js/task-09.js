const body = document.querySelector("body")
const btn = document.querySelector('button')
const colorValue = document.querySelector('span.color')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onClick = () => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color
}

btn.addEventListener('click', onClick)


