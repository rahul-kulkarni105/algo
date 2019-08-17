// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // Building a character Map
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    // if (!charMap[char]) {
    //   charMap[char] = 1;
    // } else {
    //   charMap[char]++;
    // }
    charMap[char] = charMap[char] + 1 || 1;
  }

  // for in loop for looping over objects.
  // Objects start with o, so use IN which starts with i, NOT o.
  // For strings use for of as above.
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
