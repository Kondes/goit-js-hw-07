const inputRef = document.querySelector('#font-size-control');
const fontsSizeRef = document.querySelector('#text');

inputRef.addEventListener('input', () => {
  fontsSizeRef.style.fontSize = event.currentTarget.value + 'px';
});
