function isIsogram(str) {
    let a = true;
    let strLittle = str.toLowerCase()
    strLittle.split('').forEach(i => {
        var pattern = new RegExp(i, 'g');
        if (strLittle.match(pattern).length > 1) {
            a = false
        }
    });
    return a;
}

// function isIsogram(str) {
//     let a = true;
//     str.split('').forEach(i => {
//         var pattern = new RegExp(i, 'gi');
//         if (str.match(pattern).length > 1) {
//             a = false
//         }
//     });
//     return a;
// }

// function isIsogram(str) {
//     let strLittle = str.toLowerCase()
//     const mySet1 = new Set(strLittle)
//     return mySet1.size === str.length
// }