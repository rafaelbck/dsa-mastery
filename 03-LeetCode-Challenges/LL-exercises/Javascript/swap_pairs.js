/*
        //   | Description:                                      |
        //   | - Swaps every two adjacent nodes in the linked    |
        //   |   list.                                           |
        //   | - Modifies the list in place without creating     |
        //   |   new nodes.                                      |
        //   |                                                   |
        //   | Behavior:                                         |
        //   | - A dummy node is used to simplify swapping from  |
        //   |   the head of the list.                           |
        //   | - In each loop iteration, two nodes (`first` and  |
        //   |   `second`) are swapped using pointer changes.    |
        //   | - The `previous` pointer tracks the last node     |
        //   |   before the swapped pair.                        |
        //   | - Updates `this.head` to the new first node.     
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

  swapPairs(){
    let dummy = new Node(0);
    dummy.next = this.head;
    let prev = dummy;
    let first = prev.next;
    for(i=0; i < 2; i++){
        let second = first.next;
        first.next = second.next
        prev.next = second
        second.next = first
        prev = first
        first = first.next
    }
    this.head = dummy.next
  }
}
