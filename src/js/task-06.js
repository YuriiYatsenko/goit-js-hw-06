
const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const valueLength = input.value.length;
  const requiredLength = input.getAttribute('data-length');

  if (valueLength === parseInt(requiredLength)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});