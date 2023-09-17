function friend(friends) {
    let res = [];

    friends.forEach(i => {
        if (i.length === 4) {
            res.push(i)
        }
    })
    return res
}