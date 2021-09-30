function indexedChars(str) {
    let output = '';
       for (let i = 0; i < str.length; i++) {
           output = output + [i] + str[i];
       }
       return output;
   }
   console.log(indexedChars('Wow this is neat'));