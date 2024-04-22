# JavaScript Array Basics

Arrays in JavaScript are used to store multiple values in a single variable. They are a special type of object that represents a list-like collection of elements. Below is an overview of JavaScript array basics along with examples:

## Creating Arrays

You can create an array by enclosing its elements within square brackets `[]`:

```javascript
let fruits = ["apple", "banana", "orange"];
```

## Working with Array

```js
let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, "Hello", true, null];

// Array Constructor
const fruits = new Array("apple", "grape", "orange");

// Get value by index
x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[2]}`;

x = numbers.length;

fruits[2] = "pear";

// length is not read-only
// fruits.length = 2;

fruits[3] = "strawberry";

// Using the length as the index will always add on the the end
fruits[fruits.length] = "blueberry";
fruits[fruits.length] = "peach";

x = fruits;

console.log(x);
```
