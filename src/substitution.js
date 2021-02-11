// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const standard = 'abcdefghijklmnopqrstuvwxyz';

  const invalidAlpha = (alphabet) => {
    return (alphabet.length != 26);
  }
  const isNotUnique = (alphabet) => {
    let duplicate = false;
    let index = 0;
    while (!duplicate && index < alphabet.length) {
      const subAlpha = alphabet.substring(index + 1);
      duplicate = subAlpha.includes(alphabet[index]);
      index++;
    }
    return duplicate;
  }

  const transposeCharacter = (ch,alphabet,encode = true) => {
    let character;
    if(encode){
      if(ch === ' ') return ' ';
      const index = standard.indexOf(ch);
      character = alphabet[index];
    }else{
      if(ch === ' ') return ' ';
      const index = alphabet.indexOf(ch);
      character = standard[index];
    }
    return character;
  }

  const codeMessage = (input,alphabet, encode = true) => {
    let codedMessage = "";
    if(encode){
      for(ch of input){
        codedMessage += transposeCharacter(ch,alphabet);
      }
    }else{
      for(ch of input){
        codedMessage += transposeCharacter(ch,alphabet,false);
      }
    }
    return codedMessage;
  }

  function substitution(input, alphabet, encode = true) {
    if (typeof(input) != "string"||!alphabet ||invalidAlpha(alphabet) || isNotUnique(alphabet)) return false;
    let message;
    input = input.toLowerCase();
    alphabet = alphabet.toLowerCase();
    (encode) ? message = codeMessage(input, alphabet) : message = codeMessage(input, alphabet, false);
    return message;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
