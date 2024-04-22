## Javascript Data types

**String**

```js
const firstName = "Sara";
```

**Number**

```js
const age = 30;
const temp = 98.9;
```

**Boolean**

```js
const hasKids = true;
```

**Null**

```js
const aptNumber = null;
```

**Undefined**

```js
// let score;
const score = undefined;
```

**Symbol**

```js
const id = Symbol("id");
```

**BigInt**

```js
const n = 9007199254740991n;
```

**Reference Types**

```js
const numbers = [1, 2, 3, 4];

const person = {
  name: "Brad",
};

function sayHello() {
  console.log("Hello");
}

const output = sayHello;

console.log(output, typeof output);
```

- More info on why `typeof null == object`

  [More info on why typeof null == object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null)

- More info on the `function object` type

  [More info on the "function object" type](https://262.ecma-international.org/5.1/#sec-11.4.3)
