// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

/**
 * - Orderd collection of data
 * - Collection containes no of different nodes
 * - each node containes some data
 * - and reference to next node.
 *
 * - Chain of nodes.
 * - List of nodes has an order which is always maintained.
 * - Unless it is changed explicitly.
 *
 * - Head node - first node
 * - tail node - last node - no reference to any other node.
 *
 * - First part
 * - "Data" tucked inside each node - can be string, number, array, object
 *
 * - Other part
 * - "next" node reference.
 *
 * const nodeOne = { data: 123 };
 *
 * const nodeTwo = { data: 456 };
 *
 * nodeOne.next = nodeTwo; == Linked list.
 */

class Node {
  // Use null for last reference of next, instead of undefined.
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

// const list = new LinkedList();
// list.head = new Node(10);

module.exports = { Node, LinkedList };
