function spinWords(string){
    let strSplit = string.split(' ')
    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > 4){
          strSplit[i] = strSplit[i].split('').reverse().join('')
       }
    }
    
    return strSplit.join(' ')
  }
  
  console.log(spinWords("Just kidding there is still one more"))