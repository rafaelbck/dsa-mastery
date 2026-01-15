<?php

class Node
{

    public $value;
    public $next;

    public function __construct(int $value)
    {
        $this->value = $value;
        $this->next = null;
    }
}
;

class LinkedList
{

    public $head;
    public $tail;
    public $length;

    public function __construct(int $value)
    {
        $newNode = new Node(value: $value);
        $this->head = $newNode;
        $this->tail = $this->head;
        $this->length = 1;
    }

    # Push: add element to the end - O(1)

    public function push(int $value): static
    {
        $NewNode = new Node(value: $value);
        if (!$this->head) {
            $this->head = $NewNode;
            $this->tail = $NewNode;
        } else {
            $this->tail->next = $NewNode;
            $this->tail = $NewNode;
        }
        $this->length++;
        return $this;
    }

    #Pop: delete from the end - O(n)

    public function pop(): mixed
    {
        if (!$this->head)
            return null;

        $temp = $this->head;
        $pre = $this->head;

        while ($temp->next) {
            $pre = $temp;
            $temp = $temp->next;
        }

        $this->tail = $pre;
        $this->tail->next = null;
        $this->length--;

        if ($this->length === 0) {
            $this->head = null;
            $this->tail = null;
        }

        return $temp;
    }

    #Unshift: Add element to the beggining - O(1)

    public function unshift(int $value): static
    {
        $NewNode = new Node(value: $value);

        if (!$this->head) {
            $this->head = $NewNode;
            $this->tail = $NewNode;
        } else {
            $NewNode->next = $this->head;
            $this->head = $NewNode;
        }

        $this->length++;
        return $this;
    }

    #Shift: Remove element from the beggining - O(1)
    public function shift(): mixed
    {
        if (!$this->head)
            return null;
        $temp = $this->head;
        $this->head = $this->head->next;
        $temp->next = null;

        if ($this->length === 0) {
            $this->tail = null;
        }

        return $temp;
    }

    #Get: Lookup for index - O(n)
    public function get(int $index): mixed
    {
        if ($index < 0 || $index > $this->length) {
            return null;
        }
        $temp = $this->head;
        for ($i = 0; $i < $index; $i++) {
            $temp = $temp->next;
        }
        return $temp;
    }

    #Set: Update a value in an index - O(n)
    public function set(int $index, int $value): bool
    {
        $temp = $this->get(index: $index);
        if ($temp) {
            $temp->value = $value;
            return true;
        } else {
            return false;
        }
    }

    #Insert: insert a node in an index - O(n)
    public function insert(int $index, int $value): mixed
    {
        if ($index === 0) {
            return $this->unshift(value: $value);
        }
        if ($index === $this->length) {
            return $this->push(value: $value);
        }
        if ($index < 0 || $index > $this->length) {
            return false;
        }

        $NewNode = new Node(value: $value);
        $temp = $this->get(index: $index - 1);
        $NewNode->next = $temp->next;
        $temp->next = $NewNode;
        $this->length++;
        return true;
    }

    # Remove node from index - O(n)
    public function remove(int $index): mixed
    {
        if ($index === 0) {
            return $this->shift();
        }
        if ($index === $this->length) {
            return $this->pop();
        }
        if ($index < 0 || $index > $this->length) {
            return false;
        }

        $pre = $this->get(index: $index - 1);
        $temp = $pre->next;
        $pre->next = $temp->next;
        $temp->next = null;
        $this->length--;
        return $temp;
    }

    #Reverse the LL - O(n)
    public function reverse(): static
    {
        $temp = $this->head;
        $this->head = $this->tail;
        $this->tail = $temp;
        $next = $temp->next;
        $prev = null;

        for ($i = 0; $i < $this->length; $i++) {
            $next = $temp->next;
            $temp->next = $prev;
            $prev = $temp;
            $temp = $next;
        }
        return $this;
    }
}