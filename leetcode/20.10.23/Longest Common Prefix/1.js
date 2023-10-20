function longestCommonPrefix (strs) {
    strs.sort()
    let first = strs[0]
    let last = strs[strs.length - 1]
    let ans = ''

    if (strs.length === 1) return strs[0]

    for (let i = 0; i < first.length; i++) {
        if (first[i] !== last[i]) {
            return ans
        } else {
            ans += first[i];
        }

    }
    return ans
};

console.log(longestCommonPrefix(["cadog","carrace","car"]))