
const price = 100; // оголошуємо через const

const button = document.querySelector('.calc-btn'); //це class, а не тег, тому потрібна крапка 
const input = document.querySelector('#qty');
const resultField = document.querySelector('.result'); //  селектор має бути рядком у лапках

button.addEventListener('click', () => { // addEventListener очікує функцію
  const quantity = Number(input.value); // input — це DOM-елемент, а не число

  if (isNaN(quantity)) {
    resultField.innerText = 'Введіть число!';
    return;
  }

  if (quantity < 0) {
    resultField.innerText = 'Кількість не може бути менше 0!'; // не закрита лапка в рядку
  } else {
    const total = price * quantity; // має бути множення (ціна × кількість)
    resultField.innerText = `До сплати: ${total} грн`; // правильне імʼя — innerHTML (регістр важливий) а ще краще  використовувати template string
  }
});
