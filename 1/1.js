function createPhoneNumber(numbers){
    let a = numbers.join('')
    return '\('  + a.slice(0, 3) + '\)' + ' ' + a.slice(3, 6) + '-' + a.slice(6);
  }
  
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))