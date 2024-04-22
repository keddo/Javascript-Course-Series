# JavaScript Dates and Times

Working with dates and times is a common task in JavaScript applications. JavaScript provides a built-in `Date` object for working with dates and times. Below is an overview of JavaScript dates and times along with examples:

## Creating a Date Object

A `Date` object represents a specific moment in time. You can create a new `Date` object using the `new` keyword:

```javascript
let currentDate = new Date();
console.log(currentDate); // Output: Current date and time
```

You can also create a `Date` object with a specific date and time using the `Date` constructor

```javascript
let specificDate = new Date("2024-04-22T12:00:00");
console.log(specificDate); // Output: April 22, 2024 12:00:00
```

## Getting Date Components

You can get various components of a date using Date object methods:

- `getFullYear()`: Returns the year.
- `getMonth()`: Returns the month (0-11).
- `getDate()`: Returns the day of the month (1-31).
- `getDay()`: Returns the day of the week (0-6, where 0 represents Sunday).
- `getHours()`: Returns the hour (0-23).
- `getMinutes()`: Returns the minutes (0-59).
- `getSeconds()`: Returns the seconds (0-59).
- `getMilliseconds()`: Returns the milliseconds (0-999).

```js
let currentDate = new Date();
console.log(currentDate.getFullYear()); // Output: Current year
console.log(currentDate.getMonth()); // Output: Current month
console.log(currentDate.getDate()); // Output: Current day of the month
console.log(currentDate.getDay()); // Output: Current day of the week
console.log(currentDate.getHours()); // Output: Current hour
console.log(currentDate.getMinutes()); // Output: Current minutes
console.log(currentDate.getSeconds()); // Output: Current seconds
console.log(currentDate.getMilliseconds()); // Output: Current milliseconds
```

## Formatting Dates

You can format dates using various methods such as `toDateString()`, `toLocaleDateString()`, `toLocaleTimeString()`, etc.

```js
let currentDate = new Date();
console.log(currentDate.toDateString()); // Output: Sun Apr 22 2024
console.log(currentDate.toLocaleDateString()); // Output: 4/22/2024
console.log(currentDate.toLocaleTimeString()); // Output: 12:00:00 PM
```

## Manipulating Dates

You can manipulate dates using methods like `setFullYear()`, `setMonth()`, `setDate()`, `setHours()`, etc.

```js
let currentDate = new Date();
currentDate.setFullYear(2025);
currentDate.setMonth(6);
currentDate.setDate(15);
console.log(currentDate); // Output: July 15, 2025
```
