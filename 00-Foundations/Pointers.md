# Pointers
When a variable points to a specific place in the memory.

```
let num1 = 5;
let num2 = num1
```
> If num1 changes, num2 stays the same. 

```
let obj1 = {value: 5};
let obj2 = obj1
```
> Both are *POINTING* to the same place in the memory. Should obj1.value change, obj2.value also changes. 

```
let obj1 = {value: 5};
let obj2 = obj1;
let obj3 {value: 57};
obj2 = obj3;
obj1 = obj2;
```

All pointers will be moved to `{value: 57}`

> In this case, the first obj `{value: 5} is not gonna have any vaiable pointing to it. At this point, it will be garbage-collected. 