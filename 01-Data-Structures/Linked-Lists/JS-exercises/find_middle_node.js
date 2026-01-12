/* 
    Constraints 
        - No length attribute;
        - Cannot calculate the length
        - Only loop through it once
*/
class Node {
    constructor(value){
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

  findMiddleNode() {
    let fast = this.head;
    let slow = this.head;
    if (!fast) return null;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log(myLinkedList.findMiddleNode())