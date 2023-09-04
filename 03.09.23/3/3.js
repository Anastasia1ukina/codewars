function duplicateCount(text){
    let a = new Set(text.toLowerCase())
    let b = 0;
    
    for(let i = 0; i < a.length; i++) {
      text.toLowerCase().filter(i=>i==a[i])
    }
  }
  
  console.log(duplicateCount("Indivisibility"))