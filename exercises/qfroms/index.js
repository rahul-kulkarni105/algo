// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {

    // Remove from first stack
    while (this.first.peek()) {
      /**
       * One liner for below two lines
       * this.second.push(this.first.pop());
       */
      const record = this.first.pop();
      // Push into second stack
      this.second.push(record);
    }

    // pop from second stack
    const record = this.second.pop();

    // pop from second and put the rest back into first for next iteration.
    while (this.second.peek()) {
      /**
       * One liner for below two lines
       * this.second.push(this.first.pop());
       */
      const record = this.second.pop();
      this.first.push(record);
    }

    return record;
  }

  peek() {

    // Just to peek inside the element which is required, not to POP
    // Below logic.
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

module.exports = Queue;
