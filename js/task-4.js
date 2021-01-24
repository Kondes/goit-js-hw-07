const spanRef = document.querySelector('#value');
const incrRef = document.querySelector('button[data-action="increment"]');
const decrRef = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

incrRef.addEventListener('click', () => {
  spanRef.textContent = counterValue += 1;
});

decrRef.addEventListener('click', () => {
  spanRef.textContent = counterValue -= 1;
});
