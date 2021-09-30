function onlyVowels(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        const letter =  str[i].toLowerCase();
        if (
            letter === 'e' ||
            letter === 'i' ||
            letter === 'o' ||
            letter === 'u' ||
            letter === 'a' 
        ) {
          output = output + letter;
      }
    }
    return output;
}

console.log(onlyVowels('Cloin Jaffe'));
console.log(onlyVowels('qucikly'));
console.log(onlyVowels('Anthony DeRosa'));