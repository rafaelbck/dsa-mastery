/*
    Constraints: 
        - No length attribute;
        - Cannot calculate the length
        - Only loop through it once
        - Verify if the linked list has a loop
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

  hasLoop() {
    let fast = this.head;
    let slow = this.head;

    while (fast && fast.next) {
      slow.next;
      fast.next.next;
      if (fast === slow){
          return true;
      } 
    }
    return false;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log(myLinkedList.findMiddleNode());
