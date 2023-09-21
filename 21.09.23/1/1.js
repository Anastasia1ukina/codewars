function SeriesSum(n) {
    let res = 0;

    for (let i = 0; i < n; i++) {
        res += 1 / (i * 3 + 1)
    }
    return res.toFixed(2).toString()
}