// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// First solution
// Iterative solution
// function steps(n) {
//   /**
//    * from 0 to n iterate through rows
//    * create an empty string
//    * from 0 to n iterate thorugh the columns
//    * if
//    * the current column is equal to or less than the current row add # to stair
//    * else
//    * add a space to stair
//    * console the output
//    */
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     // This is inside the row for loop as we need consoles
//     // as many as the number of rows
//     console.log(stair);
//   }
// }


// Second solution
// Recursive solution
/**
 * Find out bare minimum piece of information needed to call function
 * Find reasonable defaults to those minimum pieces of information
 * Give defaults to optional parameters
 * so if not passed you don't end up in infinite loop
 * Check base case, is there any work left to do? if not return.
 * If there is work left, call function again BUT
 * make sure to arguments HAVE to change
 */
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  // if (stair.length <= row) {
  //   stair += '#';
  // } else {
  //   stair += ' ';
  // }
  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

module.exports = steps;
