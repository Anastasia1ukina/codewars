function reverseWords(str) {
    let strArr = str.split(' ')
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].split('').reverse().join('');
    }
    return strArr.join(' ')
}