/*
    binary to decimal
    linked list 1111
    8 + 4 + 2 + 1
    1011
    8 + 0 + 2 + 1

    while curr !== null
    let total = curr.value
    curr.next
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

  binaryToDecimal(){
    let curr = this.head;
    let value = 0;

    while(curr !== null){
        if(total > 0){
         total *= 2   
        }
        total += curr.value
    }
  }
}