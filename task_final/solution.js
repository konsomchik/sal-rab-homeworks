function sendRequest(name, phone, address, goods, sum) {
  let data = { client: "", order: { address: "", sum: 0 }, goods: [] };

  data.client = name + " " + phone;

  data.order.address =
    "ул. " +
    address.street +
    ", дом " +
    address.house +
    ", " +
    address.entrance +
    " подъезд, " +
    address.floor +
    " этаж, кв " +
    address.flat;

  data.order.sum = sum;

  for (let i = 0; i < goods.length; i++) {
    data.goods.push({
      title: goods[i].title,
      count: goods[i].count
    });
  }

  let jsonData = JSON.stringify({ data });

  return jsonData;
}

// Пример вызова функции и вывод результата
let address = {
  street: "Ленина",
  house: 2,
  entrance: 4,
  floor: 5,
  flat: 53
};

let goods = [
  { title: "Пицца", count: 2 },
  { title: "Напиток", count: 1 }
];

let result = sendRequest("Иван", "+7(987)65-43-210", address, goods, 900);
console.log(result);
