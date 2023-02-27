const bottle = { color: "yellow", price: 50, isClean: true, capacity: "1 ltr" };
const keys = Object.keys(bottle);
console.log(bottle);
Object.freeze(bottle);
delete bottle.isClean;
console.log(bottle);
bottle.price = 1000;
console.log(bottle);
bottle.height = "1 ft";
console.log(bottle);

// console.log(keys);
// const values = Object.values(bottle);
// console.log(values);
// const pair = Object.entries(bottle);
// console.log(pair);
const twoDimension = [
  ["color", "yellow"],
  ["price", 50],
  ["isClean", true],
  ["capacity", "1 ltr"],
];
