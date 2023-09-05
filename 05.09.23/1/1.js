function isDivisible(){
    for (let i = 0; i<arguments.length; i++) {
      if(arguments[0] % arguments[i] !== 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isDivisible(24, 4))

  //метод forEach

//   function isDivisible(...arguments){
//     let flag = true;
//     arguments.forEach((argument) => {
//       if(arguments[0] % argument !== 0) {
//         flag = false;
//       }
//     })
//       return flag;
//   }
  
//   console.log(isDivisible(3, 3, 4))