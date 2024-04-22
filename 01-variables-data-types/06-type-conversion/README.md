# JavaScript Type Conversion

In JavaScript, type conversion refers to the process of converting one data type to another. This can occur implicitly or explicitly, and understanding how type conversion works is crucial for writing robust and bug-free code.

## Implicit Type Conversion

JavaScript automatically converts data types in certain situations, such as when using operators or comparing values of different types. This process is known as implicit type conversion or coercion.

### Example

```javascript
let num = 10;
let str = "5";

console.log(num + str); // Output: "105"
```

## Explicit Type Conversion

In Javascript we can also perform explicit type conversion using built-in functions or operators to convert data types as needed.

### Example

```js
let str = "10";
let num = Number(str);

console.log(typeof num); // Output: "number"
```

# Common Conversion Functions

JavaScript provides several functions for explicit type conversion:

- `Number()`: Converts a value to a number.
- `String()`: Converts a value to a string.
- `Boolean()`: Converts a value to a boolean.

Understanding when and how to use these conversion functions is essential for writing clear and maintainable code in JavaScript.

### Additional Examples

```js
let amount = "hello";

// Convert string to number
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);

// Convert number to string
amount = amount.toString();
amount = String(amount);

// Convert string to decimal
amount = parseFloat(amount);

// Convert number to boolean
amount = Boolean(amount);

// Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log("foo" / 3);

console.log(amount, typeof amount);
```
