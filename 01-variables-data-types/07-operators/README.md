# JavaScript Operator Reference

This document serves as a comprehensive guide to all JavaScript operators, providing explanations and examples for each type. Whether you're a seasoned developer or just starting out, this reference will equip you with a solid understanding of how operators work in your JavaScript code.

## What are Operators?

Operators are fundamental building blocks of JavaScript that perform specific actions on values (operands). They're essential for manipulating data, making decisions, and controlling the flow of your program.

## Types of Operators

This guide explores the following categories of operators:

**Arithmetic Operators**: Perform mathematical calculations (addition, subtraction, multiplication, division, remainder, exponentiation).
**Assignment Operators**: Assign values to variables (simple assignment and compound assignment operators).
**Comparison Operators**: Compare values and return true or false based on the relationship between them.
**Logical Operators**: Combine conditional expressions using operators like && (AND), || (OR), and ! (NOT).
**Unary Operators**: Operate on a single operand (e.g., typeof, increment/decrement ++ and --).
**Conditional (Ternary) Operator**: Provides a concise way to write an if-else statement in a single expression.
**Bitwise Operators**: Perform bit-level operations on numbers (useful for low-level programming tasks).
How to Use This Guide

Each section delves into a specific operator category, providing clear explanations and illustrative code examples to solidify your understanding. Feel free to jump to the operators you need most or explore the entire document for a comprehensive overview.

## Example

```js
// 1. Arithmetic Operators

let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 7 % 5;

// Concatenation
x = "Hello" + " " + "World";

// Exponent
x = 2 ** 3;

// Increment
x = 1;
// x = x + 1;
x++;

// Decrement
// x = x - 1;
x--;

// 2. Assignment Operators

x = 10;

x += 5;
x -= 5;
x *= 5;
x /= 5;
x %= 5;
x **= 5;

// 3. Comparison Operators

// Equal to (Just the value, not the type)
x = 2 == "2";

// Equal to (Type and value)
x = 2 === "2";

// Not equal to (Just the value, not the type)
x = 2 != "2";

// Not equal to (Type and value)
x = 2 !== 2;

// Greater than and less than
x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;

console.log(x);
```
