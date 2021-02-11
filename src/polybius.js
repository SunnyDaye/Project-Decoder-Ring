// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  //                   row 1   2   3   4   5       col
  const polybiusTable = [['a', 'f', 'l', 'q', 'v'],// 1            Note: Each index is (cordinate-1)
  ['b', 'g', 'm', 'r', 'w'],// 2
  ['c', 'h', 'n', 's', 'x'],// 3
  ['d', '(i/j)', 'o', 't', 'y'],// 4
  ['e', 'k', 'p', 'u', 'z']]// 5

  //___________________________HELPER FUNCTIONS__________________________
  const validateInputToEncode = (input) => {
    input = input.toLowerCase();
    const chars =  input.split('');
    return chars.every((ch,index) => {
      let charCode = input.charCodeAt(index);
      return (charCode >= 97 && charCode <= 122)|| (ch === ' ');
    })
  }
  const searchForCoordinate = (character) => {
    let coordinate = '';
    let found = false;
    let index = 0;
    let column, row;
    while (!found && index < polybiusTable.length) {
      column = index;
      row = polybiusTable[index].findIndex(ch => ch.includes(character));
      if (row != -1) found = true;
      index++;
    }
    coordinate += (column + 1);
    coordinate += (row + 1);
    return coordinate;
  }

  const polybiusEncode = (message) => {
    message = message.toLowerCase();
    let output = "";
    for (index in message) {
      let charCode = message.charCodeAt(index);
      if(charCode >= 97 && charCode <= 122){
        output += searchForCoordinate(message[index]);
      }else{
        output += message[index];
      }
    }
    return output;
  }

  const searchForCharacter = (coordinate) => {
    let character;
    coordinate = coordinate.split("");
    let column = Number(coordinate[0]);
    let row = Number(coordinate[1]);
    return polybiusTable[column - 1][row - 1];
  }

  const polybiusDecode = (message) => {
    if((message.replace(' ','')).length % 2 == 1) return false; //If the message to decode has an odd amoutn of characters and doesn't include a space
    let decoded = "";
    let index = 0;
    while (index < message.length) {
      let charCode = message.charCodeAt(index);
      if(charCode >= 49 && charCode <= 57) {
        let coordinate = message.slice(index, index + 2);
        decoded += searchForCharacter(coordinate);
        index += 2;
      }else{
        decoded += message[index];
        index++;
      }
        
    }
    return decoded;
  }

  function polybius(input, encode = true) {
    if (encode) {
      if(!validateInputToEncode(input)) return false;
      return polybiusEncode(input);
    } else { 
      return polybiusDecode(input);
    }
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
