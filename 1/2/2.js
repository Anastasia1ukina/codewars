var countBits = function(n) {
    let convertToBinary = n.toString(2)
    return convertToBinary.split('0').join('').length
  };
  
  console.log(countBits(7965082595))