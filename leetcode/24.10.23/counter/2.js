var createCounter = function (n) {
    let i = n;
    return function () {
        return i++;
    };
};