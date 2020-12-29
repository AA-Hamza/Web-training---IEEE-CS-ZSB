const countChar = (string, char) => {
    let sum = 0;
    for (let i = 0; i < string.length; ++i) {
        sum += (string[i] === char) ? 1 : 0;
    }
    return sum;
};

const countBs = string => countChar(string, "B");

console.log(countChar("HELLO WORLD", "O"));
console.log(countChar("BEES ARE COOL", "B"));
