function squareDigits(num){
    let a = '';
    let str_num = num.toString();
    for(let i=0;i<str_num.length;i++) {
      a += (parseInt(str_num[i]) ** 2).toString()
    }
    return parseInt(a);
  }