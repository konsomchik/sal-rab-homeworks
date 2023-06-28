function addInCartMessage(title, price) {
  const productName = title;
  const productPrice = price;

  // Задание №1.1. Оповещение о добавлении в корзину

  // создайте переменную message и присвойте ей значение, которое будет состоять из:
  // значения переменной productName
  // строки ' за '
  // значения переменной productPrice
  // строки ' теперь в корзине!'
  const message = `${productName} за ${productPrice} теперь в корзине!`;

  // выведите переменную message в консоль
  console.log(message);

  // Конец решения задания №1.1.

  return message;
}

function addInCartCountChange(value) {

  // Задание №1.2. Увеличение количества в корзине
  const oldValue = value;

  // создайте переменную newValue и присвойте ей значение, которое будет равно:
  // значению переменной oldValue плюс 1
  const newValue = oldValue + 1;

  // Конец решения задания №1.2.

  return newValue;
}

function addInCartSumChange(sum, delta) {
  const oldSum = sum;
  const difference = delta;

  // Задание №1.3. Увеличение суммы в корзине

  // создайте переменную newSum и присвойте ей значение, которое будет равно:
  // сумме значений переменных oldSum и difference
  const newSum = oldSum + difference;

  // создайте переменную newSumText и присвойте ей значение, которое будет состоять из:
  // значения переменной newSum
  // строки ' ₽'
  const newSumText = `${newSum} ₽`;

  // Конец решения задания №1.3.

  return newSumText;
}
