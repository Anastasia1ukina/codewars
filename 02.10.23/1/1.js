function isValidWalk(walk) {
    let northSouth = 0;
    let eastWest = 0;

    for (let i = 0; i < walk.length; i++) {
        if (walk[i] === 's') {
            northSouth++;
        } else if (walk[i] === 'n') {
            northSouth--;
        } else if (walk[i] === 'w') {
            eastWest++;
        } else {
            eastWest--;
        }
    }
    return walk.length === 10 && !northSouth && !eastWest
}