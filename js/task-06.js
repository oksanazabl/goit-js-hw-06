const input = document.querySelector('#validation-input');
const inputTextLength = input.dataset.length;
// console.log(inputTextLength);
// console.log(input)
const inputText = () => {
    if (input.value.length === Number(inputTextLength)) {
        input.classList.remove(`invalid`)
        input.classList.add(`valid`)
        return;
    } else {
         input.classList.remove(`valid`)
        input.classList.add(`invalid`)
    }
}


input.addEventListener("input", inputText);