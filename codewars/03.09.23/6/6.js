function getCount(str) {
    let s = 0;
    let a = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i<str.length;i++) {
      if (a.includes(str[i])) {
        s++
      }
    }
    return s
  }