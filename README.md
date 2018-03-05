# AgeScxJS

![Travis](https://travis-ci.com/dderevjanik/agescx-js.svg?token=4Xa5bKD1752yZy67EZmR&branch=master)

Age of empires 2 scenario de/compress module for NodeJs or Browser

![BigLogo](http://dderevjanik.github.io/agescx/img/aoe2-mediavel-small.jpg)

Check [TODO.md List](TODO.md) for more information about project status

## About

AgeScxJS is isomorphic module for nodejs written in Typescript. The main reason,
why was this module created, is lack of functionality, which AoE2 in-game editor
offers. You can't access scenario programmaticaly via some API. Also, scripts
(triggers) in AoE2 are preaty useless, because you have to handle a thousends of
them when you're creating a big scenario with RPG element. Also, after some
time, scripts are become like spaghetty code, you're not sure, which trigger is
not needed, you have to click through all of them. AgeScxJS doesn't solve this
problem, but you can use Javascript to create your own script language. You can
also generate scenarios programmaticaly (mazzes, convert bitmap images,
random, etc...). With AgeScxJS you can build your own web application for
editing/converting or viewing scenarios. There's no restrictions what you can
do with this module.

Works on server or client side in same way.

## Docs

- [Scenario Structure](docs/Scenario.md) to see output structure of AgeScx
- [List of Enums](docs/enums/README.md) used in Scenarios
- See [Tutorial](docs/Tutorial.md) how to use agescx both in Browser and Node environments

## Others

Agescx has also several scenarios created in different Age of Empires 2
versions to test them. If you're curious in them or you want to test agescx
functionality, go to [Scenario Section](scenarios/README.md)

## License (MIT)

See [LICENSE](LICENSE)
