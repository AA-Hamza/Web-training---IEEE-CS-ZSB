const power = function(base, exp) {
    let result = 1;
    for (let count = 0; count < exp; ++count) {
        result *= base;
    }
    return result;
};

const another_power = (base, exp) => {
    let result = 1;
    for (let count = 0; count < exp; ++count) {
        result *= base;
    }
    return result;
};

console.log(another_power());
