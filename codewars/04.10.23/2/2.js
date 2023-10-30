function positiveSum(arr) {
    let check = arr.every(i => i < 0);

    if (arr.length !== 0 && !check) {
        let positiveArr = arr.filter(i => i > 0)
        let res = positiveArr.reduce((acc, currentValue) => acc + currentValue);
        return res;
    } else {
        return 0;
    }
}