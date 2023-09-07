function accum(s) {
    let letters = []
      for (let i = 0; i < s.length; i++) {
      let lowers = s[i].repeat(i+1).toLowerCase()
      console.log(lowers)
      letters.push(lowers[0].toUpperCase()+lowers.slice(1))
    }
    return letters.join('-')
  }
  
  console.log(accum('gonc'))