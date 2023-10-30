function nbYear(p0, percent, aug, p) {
    let years = 0;
    for (years; p0 < p; years++) {
        p0 += Math.floor(aug + p0 * percent / 100);
    }
    return years;
}