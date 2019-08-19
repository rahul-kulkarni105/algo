// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Iterative solution
/**
 * Linear runtime for this solution
 */
// function fib(n) {
//   const result = [0, 1];

//   // Linear runtime complexity
//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];

//     result.push(a + b);
//   }

//   return result[n];
// }

// // Recursive solution
// function fib(n) {
//   /**
//    * Time complexity of Fib recursive problem.
//    * Any exponential time algo is a automatic strict NO.
//    * Example fib of 50 with this will take extremely long time to complete.
//    *
//    * Memoization:
//    * Store the arguments of each function call along with the result.
//    * If the function is called again,
//    * return the precomputed result, rather than running the function again.
//    */

//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }

// Recursive solution with Memoization - Generic version of Memoize

function memoize(fn) {
  const cache = {};
  /**
   *
  */
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

function fib(n) {
  /**
   * Time complexity of Fib recursive problem.
   * Any exponential time algo is a automatic strict NO.
   * Example fib of 50 with this will take extremely long time to complete.
   *
   * Memoization:
   * Store the arguments of each function call along with the result.
   * If the function is called again,
   * return the precomputed result, rather than running the function again.
   */

  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

/**
 * Pass the function you need to memoize to the memoization function as a parameter
 * Then assign it to same memoized version of the function, incasse this is a recursive solution.
*/
fib = memoize(fib);

module.exports = fib;
