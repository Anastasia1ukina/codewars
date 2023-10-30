const stray = nums => nums.reduce((a, b) => a ^ b);

function stray(numbers) { // [1, 1, 2]
    let two = new Set(numbers) // {1,2}
    let nums = Array.from(two) // nums[0] = 1
    if (numbers.filter(x => x==nums[0]).length == 1) { // [1,1].length = 2
      return nums[0]                                   // [2].length = 1
    }
    return nums[1]
  }