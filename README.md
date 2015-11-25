# AgeScxJS

Age of empires 2 scenario de/compress module for nodejs

## About

AgeScxJS is module for nodejs written in Typescript. The main reason, why was this module created, 
is lack of functionality, which AoE2 in-game editor offers. You can't access scenario programmaticaly
via some API. Also, scripts (triggers) in AoE2 are preaty useless, because you have to handle a thousends of 
them when you're creating a big scenario with RPG element. Also, after some time, scripts are become
like spaghetty code, you're not sure, which trigger is not needed, you have to click through all of them.
AgeScxJS doesn't solve this problem, but you can use Javascript to create your own script language. You 
can also generate scenarios programmaticaly (mazzes, from bitmap images, random, etc...). With AgeScxJS
you can build your own web application for editing/converting or viewing scenarios. There's no 
restrictions what you can do with this module. 

Works on server or client side in same way.

## Installation

To install AgeScxJS, open terminal and type:

```$ npm install agescxjs```

*Not supported, because we're not public, yet*

If you want to use it on client-side without having NodeJS installed, download a compiled AgeScxJS and
add it to html:

```html
<script src="pathToJSFolder/agescxjs.min.js"/>
```

## Usage

However AgeScxJS is written in Typescript (Javascript superior), you can write your applicaiton or script in
Javascript, because you can compile Typescript to javascript easily. 

Using node:

```javascript
var Agescx = require('agescxjs');
var File = require('yourScenario.scx');

var scenario = new Agescx(File);

```


If you're using client-side version:

```javascript
<script>
	var scenario = new Agescx(File);
</script>
```
