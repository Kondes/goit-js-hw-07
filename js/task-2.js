const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listItemsRef = document.querySelector('#ingredients');
// console.log(listItemsRef);

const listRefs = ingredients.map(item => {
  const listRef = document.createElement('li');
  listRef.textContent = item;
  return listRef;
});

listItemsRef.append(...listRefs);
// console.log(listItemsRef);