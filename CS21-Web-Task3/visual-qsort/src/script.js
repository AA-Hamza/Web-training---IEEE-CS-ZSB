let delay = 250;

let pivot_color = "var(--red)";
let partition_color = "var(--aqua)";
let normal_color = "var(--blue)";
let swap_color = "var(--purple)";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function swap(a, b) {
    let original_color = a.style.backgroundColor;
    a.style.backgroundColor = swap_color;
    b.style.backgroundColor = swap_color;
    await sleep(delay);
    let tmp = b.innerHTML;
    let tmp_height = b.style.height;
    b.innerHTML = a.innerHTML;
    a.innerHTML = tmp;
    b.style.height = a.style.height;
    a.style.height = tmp_height;
    a.style.backgroundColor = original_color;
    b.style.backgroundColor = original_color;
}

async function partition(elems, l, r) {
    let p = Number(elems[r].innerHTML);
    let original_color = elems[r].style.backgroundColor;

    for (let e = l; e <= r; ++e) {
        elems[e].style.backgroundColor = partition_color;
    }

    elems[r].style.backgroundColor = pivot_color;

    let i = l-1;
    let j = l;

    for (; j < r; ++j) {
        if (Number(elems[j].innerHTML) <= p) {
            i++;
            await swap(elems[i], elems[j]);
        }
    }
    await swap(elems[i+1], elems[r]);

    for (let e = l; e <= r; ++e) {
        elems[e].style.backgroundColor = original_color;
    }
    return i+1;
}

function QUICKSORT(elems, l, r) {
    if (l < r) {
       partition(elems, l, r).then((value) => {
            QUICKSORT(elems, l, value-1);
            QUICKSORT(elems, value+1, r);
       } )
    }
}
function qsort() {
    let elements = document.getElementsByClassName("value-column");
    for (let i = 0; i < elements.length; ++i) {
        elements[i].style.backgroundColor = normal_color;
    }
    QUICKSORT(elements, 0, elements.length-1);

/*
    let numbers = [];
    for (let i = 0; i < elements.length; ++i) {
        numbers.push(Number(elements[i].innerHTML));
    }
    */


    /*
    for (let i = elements.length-1; i > 0; --i) {
        for (let j = 0; j < i; ++j) {
            swap(elements[j], elements[j+1], delay);
            await new Promise(resolve =>
                setTimeout(() => {
                resolve();
            }, delay)
            );
        }
        elements[i].style.backgroundColor = partition_color;
    }
    elements[0].style.backgroundColor = partition_color;
    */
}