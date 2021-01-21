const listRefs = document.querySelectorAll('.item');

console.log(`В списке ${listRefs.length} категории.`);

listRefs.forEach(listRef => {
  console.log(
    `Категория: ${listRef.firstElementChild.textContent}. Количество элементов: ${listRef.lastElementChild.children.length} `,
  );
});
