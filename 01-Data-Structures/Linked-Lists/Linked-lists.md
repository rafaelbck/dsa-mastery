# Linked Lists

> null-terminated list

In comparison to arrays:
* Do not contain indexes
* Are not in a continuos memory place
* Head: var that points to the first item
* Tail: var that points to the last item
* Each item points to the next
* Last item points to null

## Big O

* Add to the end: O(1)
* Pop from the end: O(n)
    * It is not possible to go back in the list; iterates all the elements till the end. 
* Add to the beginning: O(1)
* Remove from the beginning: O(1)
* Add to the middle: O(n)
* Remove from the middle: O(n)
* Find: 
    * From the value: O(n)
    * From the index: O(n)

> Some operations are best in Arrays, some in LL. The choice depends on the use! 

## Under the Hood

### Node
It is an object with value and next; 
```
{
    value: 5,
    next: null
}
```

### LL are sets of nested objects 
```
{
    head: {
        value: 11,
        next: {
            value: 3,
            next: {
                value: 23,
                next: {
                    value: 7,
                    next: {
                        value: 4,
                        next: null // tail
                    }
                }
            }
        }
    }
}
```

## Methods
* push(value): adds to the end; time complexity = O(1);
* pop(): removes from the end; time complexity = O(n);
* unshift(value): adds to the beggining; time complexity = O(1);
* shift(): removes from beggining; time complexity = O(1);
* get(index): searches the value of a index; time complexity = O(n);
* set(index, value): set a value to a determined index; time complexity = O(n);
* insert(index, value): insert a value in a determined index & moves the list accordingly; time complexity = O(n);
* remove(index): removes an index from the list; time complexity = O(n);
* reverse(): reverses the list; time complexity = O(n);