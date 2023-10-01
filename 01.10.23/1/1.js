function minMax(arr) {
    let resArr = []
    resArr.push(Math.min(...arr))
    resArr.push(Math.max(...arr))
    return resArr;
}