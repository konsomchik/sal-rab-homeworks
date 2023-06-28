function calcShipping(sum, min, shipping) {
  const productsSum = sum; // сумма в корзине
  const freeShippingMinSum = min; // минимальная цена для бесплатной доставки
  const shippingPrice = shipping; // стоимость доставки

  // Задание №2.1. Рассчитать доставку

  let shippingSum = 0;

  if (productsSum > 0 && productsSum < freeShippingMinSum) {
    shippingSum = shippingPrice;
  }

  // Конец решения задания №2.1.

  return shippingSum;
}

function calcDiscount(sum, min, discount) {
  const productsSum = sum; // сумма в корзине
  const discountMinSum = min; // минимальная цена для скидки
  const discountPart = discount; // величина скидки в процентах

  // Задание №2.2. Рассчитать скидку

  let discountSum = 0;

  if (productsSum >= discountMinSum) {
    discountSum = productsSum * (discountPart / 100);
  }

  // Конец решения задания №2.2.

  return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
  const productsSum = sum;
  const discountSum = calcDiscount(sum, discountMinSum, discountPart);

  // Задача №2.3. Рассчитать скидки и доставку в корзине

  let totalSum = productsSum - discountSum;

  const shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

  totalSum += shippingSum;

  const freeShipping = shippingSum === 0;

  // Конец решения задачи №2.3.

  return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
