let arr = [-1, -2, 3, 4, 5];
let newArr = arr.reduce((acc, items) => {
    return acc = items > 0 ? acc.push(items * 2) : acc;
}, [])
console.log(newArr);