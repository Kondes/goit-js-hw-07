const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
  nameRef.textContent = event.target.value;
  if (nameRef.textContent === '') {
    nameRef.textContent = 'незнакомец';
  }
});
