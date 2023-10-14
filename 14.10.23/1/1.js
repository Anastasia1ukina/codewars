function sum(numbers) {
    if (numbers.length !== 0) {
        return numbers.reduce((a, b) => a + b)
    }
    return 0;
}