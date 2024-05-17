let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raseberry'];

// Nesting arrays

// Nesting berries inside of fruits
// fruits.push(berries);

// Create a new variable and nest both arrays
const allFruits = [fruits, berries];

x = allFruits[1][2];

// concat() - Concatenate arrays
x = fruits.concat(berries);

// spread operator (...) - Concatenate with
x = [...fruits, ...berries];

// console.log(x)
// flat() - Flatten an array
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();

// console.log(x)

// Static methods of Array object

// isArray() - Check is an array
x = Array.isArray(fruits);
console.log(x);
// from() - Create an array from an array like value
x = Array.from('12345');
console.log(x);
// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);