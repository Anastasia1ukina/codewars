function getMiddle(s) {
    let midIndex = s.length / 2
    if(s.length % 2 !== 0) {
      return s[midIndex - 0.5]
    } 
    return s.slice((midIndex - 1), (midIndex + 1))
  }
  
  console.log(getMiddle("testing"))