function isDivisible(){
    for (let i =0; i<arguments.length; i++) {
      if(arguments[0] % arguments[i] !== 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isDivisible(24, 4))