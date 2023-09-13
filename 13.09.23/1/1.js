function findShort(s) {
    let res = s.split(' ').reduce((a, b) => (a.length < b.length) ? a : b);
    return res.length
}