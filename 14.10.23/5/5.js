function sumDigPow(a, b) {
    let res = [];

    for (let i = a; i < b; i++) {
        let digit = Array.from(String(i), Number);
        let sum = 0;
        for (let k = 0; k < digit.length; k++) {
            sum += digit[k] ** (k + 1);
        }
        if (i === sum) {
            res.push(i)
        }
    }
    return res;
}

function sumDigPow(a, b) {
    let found = [];
    for (let i = a; i <= b; i++) {
        if (i === i.toString().split('').reduce((a, n, i) => a + n ** (i + 1), 0)) {
            found.push(i);
        }
    }
    return found;
}

