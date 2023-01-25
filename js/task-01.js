
const liHTML = document.querySelectorAll('li.item');
console.log(`Number of categories: ${liHTML.length}`);


const ulHTML = document.querySelectorAll("#categories>li");
ulHTML.forEach(Element => {
  console.log(`Category: ${Element.firstElementChild.textContent}`);
  console.log(`Elements: ${Element.lastElementChild.children.length}`);
});

