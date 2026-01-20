const price = 100;

const button = document.querySelector('.calc-btn');
const input = document.querySelector('#qty');
const resultField = document.querySelector('.result');

button.addEventListener('click', () => {
  const quantity = Number(input.value);

  if (isNaN(quantity)) {
    resultField.innerText = 'Введіть число!';
    return;
  }

  if (quantity < 0) {
    resultField.innerText = 'Кількість не може бути менше 0!';
  } else {
    const total = price * quantity;
    resultField.innerText = `До сплати: ${total} грн`;
  }
});
