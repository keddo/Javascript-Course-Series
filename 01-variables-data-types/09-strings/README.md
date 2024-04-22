# JavaScript Strings

Strings are sequences of characters enclosed within single ('') or double ("") quotes in JavaScript. They are used to represent text data and can be manipulated using various methods and operators. Below is an overview of JavaScript strings along with examples:

## Creating Strings

Strings can be created using single or double quotes:

```javascript
let singleQuotedString = "Hello, world!";
let doubleQuotedString = "Hello, world!";
```

## String Methods

JavaScript provides several built-in methods for manipulating strings:

- `length`: Returns the length of a string

```js
let str = "Hello";
console.log(str.length); // Output: 5
```

- `toUpperCase()`: Converts a string to uppercase

```js
let str = "hello";
console.log(str.toUpperCase()); // Output: "HELLO"
```

- `toLowerCase()`: Converts a string to lowercase

```js
let str = "HELLO";
console.log(str.toLowerCase()); // Output: "hello"
```

- `charAt()`: Returns the character at a specified index in a string.

```js
let str = "Hello";
console.log(str.charAt(0)); // Output: "H"
console.log(str.charAt(1)); // Output: "e"
```

- `indexOf()`: Returns the index of the first occurrence of a specified value in a string

```js
let str = "Hello, world!";
console.log(str.indexOf("l")); // Output: 2
console.log(str.indexOf("H")); // Output: 0

console.log(str.indexOf("world")); // Output: 7
console.log(str.indexOf("z")); // Output: -1
```

- `slice()`: Extracts a portion of a string and returns it as a new string

```js
let str = "Hello, world!";
console.log(str.slice(0, 5)); // Output: "Hello"
```

## Template Literals

Template literals allow embedding expressions within strings using ${}:

```js
let name = "John";
let age = 30;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // Output: "My name is John and I am 30 years old."
```

## Escape Characters

Special characters can be escaped within strings using backslashes:

```js
let str = 'She said, "Hello!"';
console.log(str); // Output: She said, "Hello!"
```
