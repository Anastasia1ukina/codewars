function isValidWalk(walk) {
    let flag = false;
    for (let i = 0; i < walk.length; i++) {
        if (walk.length === 10 && walk[i] !== walk[i + 1]) {
            flag = true;
        }
    }
    return flag;
}