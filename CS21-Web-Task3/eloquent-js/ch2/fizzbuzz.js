for (let i = 1; i <= 100; ++i) {
    let write_number = true;

    if (i % 3 === 0) {
        process.stdout.write("Fizz");
        write_number = false;
    }

    if (i % 5 === 0) {
        process.stdout.write("Buzz");
        write_number = false;
    }

    if (write_number)
        process.stdout.write(i.toString());

    process.stdout.write("\n");
}
