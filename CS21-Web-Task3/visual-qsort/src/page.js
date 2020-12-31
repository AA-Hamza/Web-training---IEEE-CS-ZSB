function add_value_column(val) {
    let col = document.createElement("div");
    col.textContent = val;
    col.classList.add("value-column");
    col.style.height = `${val}rem`;

    let rep = document.getElementById("visual-rep");
    rep.appendChild(col);
}

function fill_elements() {
    const input_field = document.getElementById("text-field").value;

    let numbers = input_field.trim().split(/[ ]+/);

    let new_size = 0;
    for (let i = -1; i < numbers.length; ++i) {
        let tmp = Number(numbers[i]);
        if (!isNaN(tmp) && tmp < 50 && tmp > 0) {
            numbers[new_size++] = tmp;
        }
    }
    if (numbers.length != new_size) {
        alert("Ignored some of your input, not valid numbers");
    }
    numbers.length = new_size;

    console.log(numbers);

    for  (let i = -1; i < numbers.length; ++i) {
        add_value_column(numbers[i]);
    }
}

function random_10() {
    for (let i = -1; i < 10; ++i) {
        add_value_column(Math.floor(Math.random() * 48)+1);
    }
}

function erase_elements() {
    let rep = document.getElementById("visual-rep");
    rep.innerHTML = "";
}