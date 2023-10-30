function sortByLength(array) {
    let res = array.sort((a, b) => a.length > b.length ? 1 : -1)
    return res
};