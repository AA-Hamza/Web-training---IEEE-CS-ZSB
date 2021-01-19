function deepEqual(obj1, obj2) {
    let obj1Keys = Object.keys(obj1);
    let obj2Keys = Object.keys(obj2);
    if (obj1Keys.length === obj2Keys.length) {
        for (let key of obj1Keys) {
            if (typeof key === 'object') {
                if (typeof obj2[key] === 'object') {
                    return deepEqual(obj1[key], obj2[key]);
                }
                else {
                    return false;
                }
            }
            if (!(obj1[key] === obj2[key])) {
                return false;
            }
        }
        return true;
    }
    else {
        return false;
    }
}

let a = {name: "Patrick", age: 42};
let b = {name: "Patrick", age: 42};

let c = {name: "Patrick", age: 42.5};
let d = {name: "patrick", age: 42.5};

let e = {firstName: "patrick", age: 42.5};
let f = {firstName: "patrick", secondName: "john", age: 42.5};

console.log(deepEqual(a, b));
console.log(deepEqual(a, c));
console.log(deepEqual(c, d));
console.log(deepEqual(e, f));
