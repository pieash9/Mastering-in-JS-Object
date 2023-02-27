const numbers = [12,54,6,67, 3];
for(const number of numbers){
    // console.log(number);
}

// for of lop can't be used with object
const bottle = { color: "yellow", price: 50, isClean: true, capacity: "1 ltr" };
// first option to loop through an object
const keys= Object.keys(bottle)
// console.log(keys);
/* 
3 ways to read object property

1. bottle.color
2.bottle['color']
3. bottle[key]
*/
for (const key of keys){
    // console.log(key,bottle[key]);
}

//for in loop


for(const key in bottle){
    console.log(key,bottle[key]);
}


// advanced

const pair = Object.entries(bottle)
// console.log(pair);

for(const [key,value] of Object.entries(bottle)){
    console.log(key,value);
}