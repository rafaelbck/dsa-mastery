<?php

class Node
{

    public $value;
    public $next;

    public function __construct(string $value)
    {
        $this->value = $value;
        $this->next = null;
    }
};

class LinkedList {

    public $head;
    public $tail;
    public $length;

    public function __construct(string $value){
        $newNode = new Node($value);
        $this->head = $newNode;
        $this->tail = $this->head;
        $this->length = 1;   
    }
}