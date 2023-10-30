function findVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let count = 0;
    str = str.toLowerCase()

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) count++
    }
    return count;
}

function findVowels2(str) {
    const matched = str.match(/[aeiouy]/gi)
    return matched ? matched.length : 0
}

findVowels2('hello')