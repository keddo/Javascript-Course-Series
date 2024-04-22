### Javascript Console

## Log a number

```
$ console.log(100)
100
```

## Log a String

```
$ console.log("Hello, world")
Hello, world
```

## Log multiple values

```
$ console.log(20, 'Hello', true)
20 Hello true
```

## Log a variable

```
const x = 100;
$ console.log(x)
100
```

## Console error, info, warning

```
$ console.error("This is an error")
This is an error

$ console.warn("This is a warning")
This is warning

$ console.info("This is an info")
This is an info
```

## Log object and Object as table

```
$ console.log({a: 1, b: 2})
{a: 1, b: 2}
$ console.table({a: 1, b: 2})
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│ a       │ 1      │
│ b       │ 2      │
└─────────┴────────┘
```

## Group console commands

```
$ console.group('simple');
$ console.log(x);
$ console.error('Alert');
$ console.warn('Warning');
$ console.groupEnd();
```

<details>
  <summary>simple</summary>
     100
    <br>Alert
    <br>Warning
</details>

## Add CSS to logs

```
$ const styles = 'padding: 10px; background-color: white; color: green'
$ console.log('%cHello World', styles)
```
