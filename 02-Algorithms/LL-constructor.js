class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
};

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    // Push: add to the end - O(1)
    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    // Pop: Deletes from the end - O(n)
    pop(){
        if(!this.head) return undefined

        let temp = this.head;
        let pre = this.head;
        while(temp.next){
            pre = temp
            temp = temp.next
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--
        if(this.length === 0){
            this.head = null;
            this.tail = null
        }
        return temp
    }

    // Unshift: Adds to the beggining - O(1)
    unshift(value){
        const newNode = new Node(value)

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    //Shift: Deletes from the beggining
    shift(){
        if(!this.head) return undefined
        let temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--
        if(this.length === 0){
            this.tail = null;
        }
        return temp
    }

    //Get: Lookup from index - O(n)
    get(index){
        if(index < 0 || index >= this.length) return undefined
        temp = this.head
        for(i=0; i < index; i++){
            temp = temp.next
        }
        return temp
    }

    //Set: Updates value in a index - O(n)
    set(index, value){
        let temp = this.get(index)
        if(temp){
            temp.value = value
            return true
        } else {
            return false
        }
    }

    //Insert: Inserts Node to a index
    insert(index, value){
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);
        if(index < 0 || index > this.length) return false;

        const newNode = new Node(value);
        const temp = this.get(index -1);
        newNode.next = temp.next;
        temp.next = newNode
        this.length++
        return true
    }

    //Remove: Deletes a node
    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return this.shift(index);
        if(index === this.length -1) return this.pop();

        let pre = this.get(index -1);
        let temp = pre.next;
        pre.next = temp.next
        temp.next = null
        this.length--
        return temp
    }

    //Reverse: Reverses the entire list
    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let next = temp.next;
        let prev = null;

        for(i = 0; i < this.length; i++){
            next = temp.next;
            temp.next = prev
            prev = temp
            temp = next
        }
        return this
    }

};