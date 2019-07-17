// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let reverseStr = '';
  for (char of str) {
    reverseStr = char + reverseStr;
  }
  return reverseStr;
}

module.exports = reverse;

// function reverse(str) {
//   return str.split('').reverse().join('');
// }


// function reverse(str) {
//   let testArray = [];
//   testArray = str.split('');
//   testArray.reverse();
//   return testArray.join('');
// }