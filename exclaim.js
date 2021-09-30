function exclaim(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '?' || str[i] === '.') {
            output += '!';
        } else {
            output += str[i];
        }
    }
    return output;
}

console.log(exclaim('What are you doing? Are you a fool?'));
console.log(exclaim('This is fine'));

