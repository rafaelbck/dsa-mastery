class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
};

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    // O(1)
    push(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.head = newNode
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length++
        return this
    }

    // O(1)
    pop(){
        if(this.length === 0) return undefined;
        let temp = this.tail      
        if (this.length === 1){
            this.head = null
            this.tail = null
        } else {
        this.tail = this.tail.prev
        this.tail.next = null
        temp.prev = null
        }
        this.length--
        return temp
    }

    unshift(value){
        const newNode = new Node(value)
        if (!this.length === 0){
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }
}
let myDLL = new DoublyLinkedList(7)
myDLL.push(1)
myDLL.push(3)
console.log(JSON.stringify(myDLL))