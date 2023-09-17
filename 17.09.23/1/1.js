function longest(s1, s2) {
    let s1Arr = s1.split('')
    let s2Arr = s2.split('')

    let allStr = [...s1Arr, ...s2Arr]
    allStr.sort()

    let uniqueChars = allStr.filter((element, index) => {
        return allStr.indexOf(element) === index
    })

    return uniqueChars.join('')
}

function longest(s1, s2) {
    let uniqueStr = new Set(s1 + s2)
    let arr = Array.from(uniqueStr);
    return arr.sort().join('')
}

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')