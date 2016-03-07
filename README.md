# AgeScxJS

![Travis](https://travis-ci.com/dderevjanik/agescx-js.svg?token=4Xa5bKD1752yZy67EZmR&branch=master)
![CircleCi](https://circleci.com/gh/dderevjanik/agescx-js/tree/master.svg?style=shield&circle-token=300c71444e312588d73d59155a33fef4d33b8647)
![DavidDM](https://david-dm.org/dderevjanik/agescx-js.svg)
![CodeClimate](https://img.shields.io/codeclimate/github/dderevjanik/agescx-js.svg)

Age of empires 2 scenario de/compress module for nodejs

![BigLogo](http://dderevjanik.github.io/agescx/img/aoe2-mediavel-small.jpg)

## About

AgeScxJS is isomorphic module for nodejs written in Typescript. The main reason, why was this module created,
is lack of functionality, which AoE2 in-game editor offers. You can't access scenario programmaticaly
via some API. Also, scripts (triggers) in AoE2 are preaty useless, because you have to handle a thousends of
them when you're creating a big scenario with RPG element. Also, after some time, scripts are become
like spaghetty code, you're not sure, which trigger is not needed, you have to click through all of them.
AgeScxJS doesn't solve this problem, but you can use Javascript to create your own script language. You
can also generate scenarios programmaticaly (mazzes, from bitmap images, random, etc...). With AgeScxJS
you can build your own web application for editing/converting or viewing scenarios. There's no
restrictions what you can do with this module.

Works on server or client side in same way.

## Usage

### NodeJS

AgeScxJS comes also with definetly typed, which means you can use data types in your project. That makes
agescx on server-side powerfull.

```js
// ES6 with System Modules
import AgeScx from 'agescx-js'

const Scenario = AgeScx.readScenarioNode('path/to/scenario.scx');
```

### Browser

In browser, you can only use compiled version of agescx. Is smaller, uglified and without types. You have
to include agescxjs in script tag on your website. You can find compiled version in `agescx-js/dist/web/agescx.min.js`

```html
<script src="agescx-js/dist/web/agescx.min.js"/>
```

## Running dev mode

```
git clone https://github.com/dderevjanik/agescx-js.git
cd agescx-js
npm install
npm run dev
```

in browser, go to `localhost:8080`

