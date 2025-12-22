# Classes
> "Like a cookie cutter"

```
class Cookie {
    constructor(color){
        this.color = color
    }
}

let cookieOne = new Cookie('green')
```

cookieOne is an instance of Cookie. This happens because the `new` keyword calls the constructor of Cookie. 

## There are two broad categories of Methods: *Getters* and *Setters* 
```
class Cookie {
    constructor(color){
        this.color = color
    }
    getColor(){
        return this.color
    }
    setColor(color){
        this.color = color
    }
}

let cookieOne = new Cookie('green')
```
## Applying the class concept: 

```
class LinkedList {
    constructor(value){...}
    push(value){...}
    unshift(value){...}
    insert(index, value){...}
    remove(index){...}
    pop(){...}
    shift(){...}
}
```