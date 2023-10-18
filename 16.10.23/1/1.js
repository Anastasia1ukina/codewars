function reverse(str) {
    if (str.trim() === '') {
        return '';
    }

    let res = [];
    let strArr = str.split(' ')
    for (let i = 1; i < strArr.length; i += 2) {
        res = strArr[i].split('').reverse().join('')
        let k = strArr.splice(i, 1, res);
    }

    res = strArr.join(' ')
    return res;
}