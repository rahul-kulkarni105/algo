// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// First solution

// function chunk(array, size) {
//   const chunked = [];

//   for (let element of array) {
//     // Last element of the array chunked.
//     /**
//      * Chunked = []
//      * Chunked = [[last]]
//      * Last is the chunk of the chunked array currently active/in use.
//      */
//     const last = chunked[chunked.length -1];

//     if (!last || last.length === size) {
//       /**
//        * push the current element inside an array and then inside chunked.
//        * Keep in mind the [element] syntax for pushing a NEW chunk
//        * with an element inside it.
//        * */
//       chunked.push([element]);
//     } else {
//       /**
//        * if the current chunk is yet to filled up untill it's length === size
//        * then just push the element
//        */
//       last.push(element);
//     }
//   }
//   return chunked;
// }

// Second solution

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  /**
   * Run from index 0 untill the length of the array.
   * Index is maintained from this point.
   * */
  while (index < array.length) {
    /**
     * slice the chunk of array which is equivalent to the size
     * so if size is 3, then slice the array from the current index which is active
     * and take out 3 elements starting from the current element
     * and then push them into the new chunked array.
     * After this, move to the next index which is the additon of the current size
     * so in this example move to the new index which is index + 3
     * and then start the index from there and rest of the process is repeated.
    */
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

module.exports = chunk;
