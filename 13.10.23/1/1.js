function findOdd(A) {
    let unique = new Set(A)
    let two = Array.from(unique)

    for (let i = 0; i < two.length; i++) {
        if (A.filter(e => two[i] === e).length % 2 !== 0) {
            return two[i]
        }
    }
}