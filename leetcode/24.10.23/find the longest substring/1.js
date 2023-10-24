function findTheLongestBalancedSubstring(s) {
    let zero = 0;
    let one = 0;
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0') {
            if (one > 0) {
                zero = 0;
                one = 0;
            }
            ++zero;
        } else {
            ans = Math.max(ans, 2 * Math.min(zero, ++one));
        }
    }
    return ans;
};

findTheLongestBalancedSubstring("01000111")