
const ulElem = document.querySelectorAll('#categories>li');
ulElem.forEach(Element => {
  console.log(
    `Category: ${Element.firstElementChild.textContent},
    Elements: ${Element.lastElementChild.children.length}`,
  );
});

const liElem = document.querySelectorAll("li.item");
console.log(`Number of categories:${liElem.length}`);

