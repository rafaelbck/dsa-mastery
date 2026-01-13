/*
    binary to decimal
    linked list 1111
    8 + 4 + 2 + 1
    1011
    8 + 0 + 2 + 1

  Constraints: 
        - No length attribute;
        - Cannot calculate the length
        - only iterate through it once
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

    binaryToDecimal() {
        let num = 0;
        let current = this.head;
        while (current !== null) {
            num = num * 2 + current.value;
            current = current.next;
        }
        return num;
    }
}
