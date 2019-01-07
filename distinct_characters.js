
function distinctCharacters(word) {

  let currentLongest = ""
  let highest = "";

  word.split('').forEach( ch => {
    const indexOfChar = currentLongest.indexOf(ch);
    if (indexOfChar != -1) {
      if (currentLongest.length > highest.length) {
        highest = currentLongest;
      }

      currentLongest = currentLongest.slice(indexOfChar+1, currentLongest.length) + ch;
    }
  })

  return highest;
}

console.log(distinctCharacters('jiujitsu'));
