# JavaScript Numbers

Numbers in JavaScript are numeric data types used to represent numerical values. They can be integers or floating-point numbers. Below is an overview of JavaScript numbers along with examples:

## Integer Numbers

Integer numbers are whole numbers without any decimal points.

```javascript
let integerNumber = 10;
```

## Floating-Point Numbers

Floating-point numbers are numbers with decimal points.

```javascript
let floatingPointNumber = 10.5;
```

## Working with Numbers

```js
let x;

const num = new Number(5);

// toString() - returns a string representation of the number
x = num.toString();
// To get the length
x = num.toString().length;

// toFixed() - returns a string representation of the number with a specified number of decimals
x = num.toFixed(2);

// toPrecision() - returns a number with the specified length
x = num.toPrecision(3);

// toExponential() -  convert a number to exponential notation and return its value as a string
x = num.toExponential(2);

// toLocaleString() - returns a string representation of the number, using the current locale
x = num.toLocaleString("en-US");

// valueOf - Get value
x = num.valueOf();

// The Number object itself has some properties and methods

// Largest and smallest possible number
x = Number.MAX_VALUE;
x = Number.MIN_VALUE;
```
