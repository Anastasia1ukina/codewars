function reverse(str) {
    let res = [];
    let strArr = str.split(' ')
    for (let i = 1; i <= strArr.length; i += 2) {
        res = strArr[i].split('').reverse().join('')
        let k = strArr.splice(i, i, res);
        console.log(i)
    }
    res = strArr.join(' ')
    console.log(res)
}

console.log(reverse("I really don't like reversing strings!"))