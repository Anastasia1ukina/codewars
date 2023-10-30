function friend(friends) {
    let res = [];

    friends.forEach(i => {
        if (i.length === 4) {
            res.push(i)
        }
    })
    return res
}

function friend(friends) {
    return friends.filter(n => n.length === 4)
}