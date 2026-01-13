/*
    Constraints
        You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.
        You can only traverse the linked list once.
        You can create temporary nodes to make the implementation simpler.
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

  partitionList(x) {
    if(this.head === null) return;

    let dummy1 = new Node(0)
    let dummy2 = new Node(0)
    let prev1 = dummy1;
    let prev2 = dummy2;


    while(current !== null){
        if(current.value < x){
            prev1.next = current;
            prev1 = current
        } else {
            prev2.next = current;
            prev2 = current
        }
        current = current.next
    }
    prev2.next = null
    prev1.next = dummy2.next
    this.head = dummy1.next
  }
}