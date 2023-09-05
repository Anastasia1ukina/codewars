function isDivisible(){
    for (let i = 0; i<arguments.length; i++) {
      if(arguments[0] % arguments[i+1] == 0) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  console.log(isDivisible(24, 4))