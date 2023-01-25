

const elemLi = document.querySelectorAll(".item");
console.log(`Number of categories: ${elemLi.length}`);

const elemUl = document.querySelectorAll("#categories>li");
elemUl.forEach(Element => {
  console.log(`Category: ${Element.firstElementChild.textContent}`);
  console.log(`Elements: ${Element.lastElementChild.children.length}`);
});

