function getSum(a, b) {
    let listRangeNumber = [];
    let listSumNumber = 0;
    if (a <= b) {
        while (a <= b) {
            listRangeNumber.push(a++);
        }
    } else {
        while (b <= a) {
            listRangeNumber.push(b++);
        }
    }
    for (let k = 0; k <= listRangeNumber.lenght; k++) {
        listSumNumber += listRangeNumber[k];
    }
    let res = listRangeNumber.reduce((x, y) => x + y, 0);

    return res;
}