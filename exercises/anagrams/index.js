// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// First Solution

// regEx to use, /[^\w]/g
// function anagrams(stringA, stringB) {
//   const {
//     charMap: aCharMap,
//     cleanString: aCleanString,
//   } = buildCharMap(stringA);
//   const {
//     charMap: bCharMap,
//     cleanString: bCleanString,
//   } = buildCharMap(stringB);
//   if (aCleanString.length !== bCleanString.length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//     return true;
//   }
// }

// function anagrams(stringA, stringB) {
//   const {
//     charMap: aCharMap
//   } = buildCharMap(stringA);
//   const {
//     charMap: bCharMap
//   } = buildCharMap(stringB);
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//     return true;
//   }
// }

// Helper function for first soliution
// function buildCharMap(string) {
//   const charMap = {};
//   const cleanString = string.replace(/[^\w]/g, '').toLowerCase();
//   for (let char of cleanString) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return {
//     charMap,
//     cleanString
//   };
// }

// Second Solution
// Array.sort() way
function anagrams(stringA, stringB) {
  const aCheck = sortString(stringA);
  const bCheck = sortString(stringB);
  return aCheck === bCheck;
}

// Helper function for second soliution
function sortString(string) {
  return string
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}


module.exports = anagrams;
