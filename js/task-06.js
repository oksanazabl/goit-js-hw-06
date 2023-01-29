const input = document.querySelector('#validation-input');
const inputTextLength = input.dataset.length;
// console.log(inputTextLength);
// console.log(input)
const inputText = () => {
    if (input.value.length === Number(inputTextLength)) {
        
        input.setAttribute('class', 'valid');       
    } else {
        input.setAttribute('class', 'invalid');
    }
}


input.addEventListener("input", inputText);