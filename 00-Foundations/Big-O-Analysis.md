# BIG O 

Big O is a way to mathematically measure which code is better, by measuring the time complexity and/or space complexity needed to run the code.

Omega $ \Omega $: best case <br>
Theta $ \Theta $: worst case <br>
Ômicron $ \Omicron $: worst case

## 1. O(n)
```
function logItems(n){
    for(let i=0; i < n; i++){
        console.log(i)
    }
}
```

The function receives the parameter N and run N times. It is a linear growth with the parameter N.

> Drop Constants: If the code runs in Cn, drop the constant. 2n code is just O(n).

## 2. O(n²)
Most inefficient
```
function logItems(n){
    for(let i=0; i < n; i++){
        for(let j=0; j < n; j++){
            console.log(i, j)
        }
    }
}
```
The function receives the parameter N and run N*N times. It is an exponential growth. 

> Drop Non-Dominants: If a function runs in a O(n² + n), it is just O(n²).

## 3. O(1) (Constant time)

The number of operations don't change with the value of N.

```
function addItems(n) {
    return n + n
}
```

## 4. O(log n)
Needs sorted data.
> Divide and Conquer! 

## 5. O(*n* log n)
Most efficient sorte algorithms that sort mutiple types of data.
--- 

![Big O complexity chart](00%20-%20Foundations/Big-o-complexty-chart.png)

## Different Terms for Inputs
```
function logItems(a, b){
    for(let i=0; i < a; i++){
        console.log(i)
    }
    for(let i=0; i < b; i++){
        console.log(i)
    }
}
```
Is not O(n). It is O(a + b).

Similarly, 
```
function logItems(a, b){
    for(let i=0; i < a; i++){
        for(let j=0; j < b; j++){
            console.log(i, j)
        }
    }
}
```
It is not O(n²), it is O(a * b).

# Big O of Arrays

> `.push() and .pop()` are both O(1), for there is no re-indexing of existing items in the array. They only modify the last item. 

> `.shift() and .unshift()` are O(n), because they require the re-indexing of the entire list (n)

> `.splice()` is also O(n). If you add or remove in the middle is O(n). 

> Searchs for value are O(n), while searchs by index are O(1).