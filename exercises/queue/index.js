// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

/**
 * - No skipping
 * - The order you come in is the order you go out.
 * - First In First Out - FIFO.
 * - Array's in Js can be used as a Queue
 * - Queue APi is part of Array prototype.
 * - array.unshift(), array.pop()
 * - shift, unshift, push, pop, splice, slice - Not allowed in queue class
 */

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;
