# AgeScxJS

![Travis](https://travis-ci.com/dderevjanik/agescx-js.svg?token=4Xa5bKD1752yZy67EZmR&branch=master)

Age of empires 2 scenario de/compress module for NodeJs or Browser

![BigLogo](http://dderevjanik.github.io/agescx/img/aoe2-mediavel-small.jpg)

## About

Is set of tools and utilities to work with `.scx` files.

The main reason, why was this project created, is lack of functionality, which AoE2 in-game editor
offers. You can't access scenario programmaticaly via some API. Also, scripts
(triggers) in AoE2 are pretty useless, because you have to handle a thousends of
them when you're creating a big scenario with RPG element. Also, after some
time, scripts are become more-like spaghetty code. That means you're not sure, which trigger is
not needed, you have to click through all of them to find out. AgeScxJS doesn't solve this
problem, but you can use Javascript to create your own script language. You can
also generate scenarios programmaticaly (mazzes, convert bitmap images,
random, etc...). With AgeScxJS you can build your own web application for
editing/converting or viewing scenarios. There's no restrictions what you can
do with those tools.

## Tools

AgeScx comes with set of different tools:

- [IO](./packages/io/README.md) read / write scenarios
- [Checker](./packages/checker/README.md) check for errors/warning in scenario
- [Diff](./packages/diff/README.md) differences between two scenarios
- [Converter](./packages/converter/README.md) convert scenario to `.json`, `.xml` or `.yaml`
- [Data](./packages/data/README.md) useful data
- [Stats](./packages/stats/README.md) scenario stats in human-readable format

## Others

Agescx has also several scenarios created in different Age of Empires 2
versions to test them. If you're curious in them or you want to test agescx
functionality, go to [Scenario Section](scenarios/README.md)

## License (MIT)

See [LICENSE](LICENSE)
