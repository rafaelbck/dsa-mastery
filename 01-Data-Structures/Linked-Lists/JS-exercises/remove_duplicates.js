/*
    Remove Duplicates

    Don't use Sets. 
    inneficient: nested loops: O(n²)
    
    pointer points to the next, not to the node
    If duplicate: pointes points to the next.next

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  removeDuplicates() {
    let curr = this.head;
    let runner;

    while (curr !== null) {
      runner = curr;

      while (runner.next !== null) {
        if (runner.next.value === curr.value) {
          runner.next = runner.next.next;
          this.length--;
        } else {
          runner = runner.next;
        }
      }
      curr = curr.next;
    }
  }
}
