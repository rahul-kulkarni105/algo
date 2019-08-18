// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// Iterative solution
// 2 * n - 1 -> this is the KEY! relation between row and column numbers increaing
// function pyramid(n) {
//   const midPoint = Math.floor((2 * n - 1) / 2);
//   for (let row = 0; row < n; row++) {
//     let level = '';
//     for (let column = 0; column < 2 * n -1; column++) {
//       // calculate the mid point/center index of array
//       // what is middle index for columns?!
//       if (midPoint - row <= column && midPoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
// }


// Recursive solution
function pyramid(n, row = 0, level = '') {
  /**
   * SET UP the base case correctly
   */
  if (row === n) {
    return;
  }

  // column length is checked here with this formula
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row +1);
  }

  // Logic for adding # and ''
  const midPoint  = Math.floor((2 * n - 1) / 2);
  let add;
  if (midPoint - row <= level.length && midPoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;
