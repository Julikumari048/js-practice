// const doubleTheNumber = (n) => {
//     if (typeof n !== "number") {
//         const error = Error(`${n} is not a Number`);
//         throw error;
//     }

//     return n * 2;
// }


// const doubleTheListElements = (list) => {
//     for (let i = 0; i < list.length; i++) {
//         list[i] = doubleTheNumber(list[i]);
//     }

//     return list;
// }

// const list = 7;
// console.log(doubleTheListElements(list));


let arr = [7, 5, 4, 3, 8, 9];
 
let newArr = arr.map(function (val, index) {
    return { key: index, value: val*val};
})
 
console.log(newArr);