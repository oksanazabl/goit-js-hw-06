const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemList = document.querySelector('ul#ingredients');


const listEl = ingredients.map(item => {
  const listElemLi = document.createElement('li')

  listElemLi.textContent = item;
  return listElemLi;
});
 console.log(itemList)
itemList.append(...listEl)

