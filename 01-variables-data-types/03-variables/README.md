# Variables

## Ways to declare a variable

- `var`, `let`, & `const`

```js
let firstName = "John";
const lastName = "Doe";
let age = 30;

console.log(age);
```

## JavaScript Naming Conventions

- Only `letters`, `numbers`, `underscores` and `dollar signs`
- Can't start with a `number`

## Multi-Word Formatting

`firstName = camelCase`

- **camelCase**: This style is widely used in JavaScript and is recommended for naming variables, functions, and object properties.

  `first_name = underscore`

- **underscore**: The underscore style, also known as snake_case, is less common in JavaScript but still used in some contexts.

  `FirstName = PascalCase`

- **PascalCase**: PascalCase is commonly used for naming constructor functions or classes in JavaScript.

  `firstname = lowercase`

- **lowercase**: Using all lowercase letters is generally not recommended for variable or function names in JavaScript

**We can re-assign `let` variables. If you change `age` to use `const`, you will get an error**

```js
age = 31;
console.log(age);
// 31
```

**With let, we can declare a value without assigning a value**

```js
let score;
score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

const x = 100;
```

**We can not re-assign a const variable**

```js
x = 200; // Will result in an error
```

**We can still manipulate arrays and objects using const**

```js
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
  name: "Kedir",
};
person.name = "John";
person.email = "john@gmail.com";
console.log(person);
```

**Declare multiple values at once**

```js
let a, b, c;

const d = 10,
  e = 20,
  f = 30;

console.log(d);
console.log(a);
```
