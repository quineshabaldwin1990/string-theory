function truncate(str) {
  if (str.length > 15) {
      
    let output = '';
    for (let i = 0; i < 15; i++) {
        output = output + str[i];
    }
    output = output + '...';
    return output;

}else {
        return str;
    }
}