
// function anagrams(word, words) {
//     let arr = []
//     let letters = word.split('').sort()
//     words.forEach((eachWord) => {
//         if ((eachWord.split('').sort() === letters) && (eachWord === eachWord.split('').reverse().join(''))) {
//             arr.push(eachWord)
//         }
//     })
//     return arr
// }



function anagrams(word, words) {
    let arrSpecial = []
    let a = ''
    let b = word.split('').sort().join('');
    let arrAnagram = words.map((i) => {
        a = i.split('').sort().join('');
        if (b == a) {
            arrSpecial.push(i)
        }
    });
    console.log(word)
    arrAnagram = arrSpecial
    return arrAnagram
}