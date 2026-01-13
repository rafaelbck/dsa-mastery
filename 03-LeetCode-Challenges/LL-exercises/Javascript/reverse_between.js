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

	reverseBetween(m, n){
        if(this.head === null) return;
        let Dummy = new Node(0);
        Dummy.next = this.head;
        let prev = Dummy;
        for(i=0; i < m; i++){
            prev = prev.next
        }
        let current = prev.next
        for(i=0; i < n-m; i++){
            let temp = current.next
            current.next = temp.next
            temp.next = prev.next
            prev.next = temp
        }
        this.head = Dummy.next
	}
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
console.log(myLinkedList)