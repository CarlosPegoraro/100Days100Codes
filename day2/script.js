const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.value === '=') {
      display.value = eval(display.value);
    } else if (button.value === 'C') {
      display.value = '';
    } else {
      display.value += button.value;
    }
  });
});