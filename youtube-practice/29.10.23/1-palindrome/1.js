function palindrome(str) {
    str = str.toLowerCase().replace(/\s/g, '');
    return str === str.split('').reverse().join('');
}

function palindrome2(str) {
    const len = Math.floor(str.length / 2);
    str = str.toLowerCase().replace(/\s/g, '');

    for (let i = 0; i < len; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

palindrome2('А роза упала на лапу Азора')