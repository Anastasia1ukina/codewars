var isSquare = function (n) {
    if (Number.isInteger(Math.sqrt(n))) {
        return true;
    }
    return false;
}

// const isSquare = n => Number.isInteger(Math.sqrt(n));
