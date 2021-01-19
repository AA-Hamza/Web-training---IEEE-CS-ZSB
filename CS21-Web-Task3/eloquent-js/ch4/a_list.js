function prepend(list, val) {
    let tmp = {value: val, rest:(Object.keys(list).length === 0 ? null : list)};
    return tmp
}

function arrayToList(arr) {
    let result = {};
    for (let i = arr.length-1; i>=0; --i) {
        result = prepend(result, arr[i]);
    }
    return result;
}

function nth(list, element, level=0) {
    if (list.value === element) {
        return level;
    }
    else {
        if (list.rest != null) {
            return nth(list.rest, element, ++level);
        }
        else {
            return undefined;
        }
    }
}

let arr = [1, 2, 3];
let l = arrayToList(arr);
console.log(l);
console.log(nth(l, 2));
