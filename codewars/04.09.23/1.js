function filter_list(l) {
    return l.filter((word) => typeof word != 'string')
}

// function filter_list(l) {
//   let arr = [];
//   for (let i = 0; i < l.length; i++) {
//     if (typeof l[i] != 'string') {
//      arr.push(l[i])
//     }
//   }
//   return arr
// }