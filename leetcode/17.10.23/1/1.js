function romanToInt(s) {
    let romanObject = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let digits = Object.keys(romanObject);
    let res = 0
    for (let i = 0; i < s.length; i++) {
        if (digits.indexOf(s[i]) < digits.indexOf(s[i + 1])) {
            res -= romanObject[s[i]];
        } else {
            res += romanObject[s[i]];
        }
    }
    return res;
};

console.log(romanToInt("MCMXCIV"))
