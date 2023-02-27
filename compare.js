// const first ={a:2};
// const second = {a:2};
// const third = second;
// if(third ===second){
//     console.log('same');
// }else{
//     console.log('difference');
// }
//do not use that method to compare object or array
const first = { a: 2, b: 3, c: 6 };
const second = { a: 2, c: 6, b: 3 };
const third = second;
const firstStr = JSON.stringify(first);
const secondStr = JSON.stringify(second);
// if (firstStr === secondStr) {
//   console.log("same");
// } else {
//   console.log("not same");
// }

function compareObject(first, second) {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);
  
  if (firstKeys.length === secondKeys.length) {
    for (const key of firstKeys) {
      if (first[key] !== second[key]) {
        return false;
      }
    }
    return true;
  }
}
const isSame = compareObject(first, second);
console.log(isSame);
