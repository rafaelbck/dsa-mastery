# Doubly Linked Lists (DLL)

It is an extension of the LL, where each node contains an aditional pointer, pointing to the previous node (prev), besides the next pointer

## 1. Node Structure
The DLL node needs more memory

* value: The data;
* next: Pointer to the next node || null.
* prev: Pointer to the previous node || null.

## 2. Advantages

* Bidirectional navigation: You com iterate through the list from the beginning to end, and through end t beggining;
* Efficient Deletion: To remove a node, you can do it in O(1), for you already have the prev pointer without iterating from head to prev;
* Easy to reverse: Reverting an DLL is simpler than a LL.

## 3. Trade-offs

* Memory consumption: Each node requires an extra pointer. In memory-restricting systems, this can be relevant;
* Complexity in implementation: Each operation of insetion or deletion requires the update of more pointers (double).

## 4. Big O Comparison
| Operation | Singly Linked List | Doubly Linked List | Technical Explanation |
| :--- | :---: | :---: | :--- |
| **Prepend** | $O(1)$ | $O(1)$ | Update the `head` pointer. |
| **Append**  | $O(1)$ | $O(1)$ | Use the `tail` pointer for direct insertion. |
| **Remove First** | $O(1)$ | $O(1)$ | Move the `head` to the next node. |
| **Remove Last** | $O(n)$ | $O(1)$ | Use `tail.prev` to step back; the LL must traverse the whole list. |
| **Lookup (value)** | $O(n)$ | $O(n)$ | Might heave to traverse the entire list. |
| **Lookup (index)** | $O(n)$ | $O(n)$ | In DLL this can be $O(n/2)$, but reamains linear with *n*  |
| **Insert/Delete** | $O(n)$ | $O(n)$ | Utilizes the $Lookup (index)$ to find the value |