function bouncingBall(h, bounce, window) {
    if (h < 0 || bounce <= 0 || bounce >= 1 || window > h) {
        return -1;
    }

    let currentHigh = h;
    let count = 0;

    while (currentHigh > window) {
        count = count + 2;
        currentHigh = currentHigh * bounce;
    }
    return count - 1;
}