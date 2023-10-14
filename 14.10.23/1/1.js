function sum(numbers) {
    if (numbers.length !== 0) {
        return numbers.reduce((a, b) => a + b)
    }
    return 0;
}

function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

const sum = n => n.reduce((a, b) => a + b, 0);