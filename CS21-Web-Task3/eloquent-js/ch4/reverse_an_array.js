function reverseArray(arr) {
    let new_arr = [];
    let length = arr.length;
    for (let element of arr) {
        new_arr[--length] = element;
    }
    return new_arr;
}

function reverseArrayInPlace(arr) {
    for  (let i = 0; i < arr.length/2; ++i) {
        let tmp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = tmp;
    }
}

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4, 5];

console.log(reverseArray(arr1));
console.log(reverseArray(arr2));

reverseArrayInPlace(arr1);
reverseArrayInPlace(arr2);

console.log(arr1);
console.log(arr2);
