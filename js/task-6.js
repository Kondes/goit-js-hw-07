const checkInputRef = document.querySelector('#validation-input');
const lengthAttributeRef = +checkInputRef.getAttribute('data-length');

checkInputRef.addEventListener('blur', event);

function event() {
  if (checkInputRef.value.length === lengthAttributeRef) {
    checkInputRef.classList.add('valid');
    checkInputRef.classList.remove('invalid');
  } else {
    checkInputRef.classList.add('invalid');
    checkInputRef.classList.remove('valid');
  }
}

//  ? checkInputRef.classList.add('invalid')
//  : checkInputRef.classList.remove('valid')
//     validation-input.invalid

//   }
//
// const inputRef = document.querySelector("#validation-input");
// const validLength = +inputRef.attributes["data-length"].value;

// inputRef.addEventListener('blur', onInputValid);

// function onInputValid() {
//   if (inputRef.value.length === validLength) {
//     inputRef.classList.add("valid");
//     inputRef.classList.remove("invalid");
//   } else {
//     inputRef.classList.add("invalid");
//     inputRef.classList.remove("valid");
//   }
// }
