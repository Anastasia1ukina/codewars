function removeSmallest(numbers) {
    const res = numbers.slice(0)
    let smallestValue = numbers.indexOf(Math.min(...numbers))
    res.splice(smallestValue, 1);
    return res;
}