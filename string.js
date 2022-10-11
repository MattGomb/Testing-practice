function stringLength(string) {

  const result = string.replaceAll(' ', '');

  if(result.length < 1) {
   
    return 'no characters';

  };
  
  if(result.length > 10) {
    
    return 'too long';

  };
  
  return result.length;

}

module.exports = stringLength;
