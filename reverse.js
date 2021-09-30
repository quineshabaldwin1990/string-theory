function reverse(str) {
  let output = '';
  for (let i = 0; i < str.length; i++) {
      const index =  (str.lenght - 1) - i;
      const letter = str[index];
      output = output + letter;
  }
   return output;
}

console.log(reverse('colin'));
console.log(reverse('mesuara'));