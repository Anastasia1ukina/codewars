function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        let diff = target - numbers[i];
        let second = numbers.slice(i + 1).indexOf(diff);
        if (second !== -1) {
            console.log(i, second + i + 1)
            return [i, second + i + 1]
        }
    }
}

console.log(twoSum([2, 2, 3], 4))