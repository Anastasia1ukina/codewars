function fizzBuzz(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 3 === 0 && nums[i] % 5 === 0) nums[i] = 'fizzBuzz'
        else if (nums[i] % 3 === 0) nums[i] = 'fizz'
        else if (nums[i] % 5 === 0) nums[i] = 'buzz'
    }
    console.log(nums)
    return nums;
}

fizzBuzz([1, 2, 3, 4, 5])