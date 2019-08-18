// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// First solution
// function vowels(str) {
//   let count = 0;
//   const vowelArr = ['a', 'e', 'i', 'o', 'u'];

//   for (let char of str.toLowerCase()) {
//     if (vowelArr.includes(char)) {
//       count += 1;
//     }
//   }
//   return count;
// }

// Second solution - more condensed version with RegEx
function vowels(str) {
  // Matches is either going to be an Array or null (if regex returns nothing)
  const matches = str.match(/[aeiou]/gi);
  // Null is a falsey value
  return matches ? matches.length : 0;
}

module.exports = vowels;
