function highAndLow(numbers){
    let numsInt = numbers.split(' ').sort((a, b) => a - b);
    return numsInt[numsInt.length-1] + ' ' + numsInt[0]
  }
  
  console.log(highAndLow('8 -3 1 -44 5 6 7 2 -5'))