// function twoSum(numbers, target) {
//     for (let i = 0; i < numbers.length; i++) {
//         let diff = target - numbers[i];
//         let second = numbers.slice(i + 1).indexOf(diff);
//         if (second !== -1) {
//             console.log(i, second + i + 1)
//             return [i, second + i + 1]
//         }
//     }
// }

function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        let second = numbers.indexOf(target - numbers[i], i + 1);
        if (second > i) {
            return [i, second];
        }
    }
}

console.log(twoSum([11,2,7,15,5,4], 9))

// var str = "Быть или не быть, вот в чём вопрос.";
// var count = 0;
// var pos = str.indexOf("в");

// while (pos !== -1) {
//     count++;
//     pos = str.indexOf("в", pos + 1);
// }

// console.log(count);