const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemElem = document.querySelector('ul#ingredients');

const listElem = ingredients.map(ingr => {
  const itemListElem = document.createElement('li');
  
  itemListElem.textContent = ingr;
  
  return itemListElem;
})

console.log(itemElem);

itemElem.append(...listElem);