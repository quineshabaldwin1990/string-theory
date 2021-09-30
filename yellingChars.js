function yellingChar(str) {
    let output = '',
    for (let i = 0; i < str.length; i++) {
      output += (str[i])
      output += ("!");
      
    }
    return output;
  }
  
  console.log(yellingChar('goodness'));
  console.log(yellingChar('oh hello'));


