function sortArray(array) {
    let evenArr = array.filter(i => i % 2 !== 0).sort((a, b) => a - b);
    let flag = 0;
    let res = [];

    array.forEach(i => {
        if (i % 2 === 0) {
            res.push(i)
        } else {
            res.push(evenArr[flag])
            flag++
        }
    })
    return res;
}
