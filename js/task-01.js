const liElem = document.querySelectorAll('li.item');
console.log(`Number of categories: ${liElem.length}`);

const ulElem = document.querySelectorAll('#categories>li');
ulElem.forEach(Element => {

  console.log(
    `Category: ${Element.firstElementChild.textContent}, Elements: ${Element.lastElementChild.children.length}`,
  );
});






// const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl);

// const createImg = img => {
//     return '<li> <img src = "$(img.url)" alt = "$(img.alt)"/></li>'
// }

// const imgGall = images.map(createImg).join("");
// console.log(imgGall);
// galleryEl.insertAdjacentHTML("beforeend", imgGall);