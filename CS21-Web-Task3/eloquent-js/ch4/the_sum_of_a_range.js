function range(start, end, step=1) {
    let arr = [];
    let sign = (step>0 ? 1:-1);
    for (let i = start; sign*i <= sign*end; i+=step) {
        arr.push(i);
    }
    return arr;
}

function sum(arr) {
    let sum = 0;
    for (let element of arr) {
        sum += element;
    }
    return sum;
}

console.log(sum(range(1, 10)));
