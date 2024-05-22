// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้


function calculateTotalPrice(products, promotionCode) {
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price * products[i].quantity
  }
  if (promotionCode === "SALE20") {
    totalPrice *= 0.8;
  } else if (promotionCode === "SALE50") {
    totalPrice *= 0.5;
  }

  return totalPrice

}

let promotionCode1 = "";
let promotionCode2 = "SALE20";
let promotionCode3 = "SALE50";

console.log(calculateTotalPrice(products, promotionCode1));
console.log(calculateTotalPrice(products, promotionCode2));
console.log(calculateTotalPrice(products, promotionCode3));



