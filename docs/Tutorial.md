# Tutorial

AgeScx is tool primary for importing and exporting scenario files from Age of Empires.
It comes with a rich set of predefined interfaces, enums and functions, which are useful
for manipulating with scenario files.

## Installation

### Node enviroment

Using npm

`npm install agescx --save-dev`

Use agescx in your project

```javascript
import AgeScx from 'agescx';

const myScenario = AgeScx.readScenario('path/to/myScenario.scx');
```

Thats all, from this point you can treat `myScenario` as normal Javascript object

### Browsers

Download [agescx.min.js](https://github.com/dderevjanik/agescx-js/blob/master/dist/web/agescx.min.js) and in your html file,
add script tag.

```html
<script src="agescx.min.js"></script>
```

To open any scenario file in your browser, first you need to upload a file to and then read Arraybuffer from it.
Small example how to proper load scenario in browser.

```html
<script>
    function openFile(e) {
        console.log('uploading a scenario');
        var inpFile = event.target;

        var reader = new FileReader();
        reader.onload = function() {
            console.log('scenario uploaded');
            var arrayBuffer = reader.result;
            agescx.readScenario(arrayBuffer, true);
        }
        reader.readAsArrayBuffer(inpFile.files[0]);
    };
</script>
<input type="file" id="inpScenario" placeholder="select a scenario to upload" onchange="openFile(event)"/>
```

## Contributing

To start dev version of AgeScx

```
git clone https://github.com/dderevjanik/agescx-js.git
cd agescx-js
npm run dev
```

### Npm scripts

- `npm run test` run test
- `npm run dev` run dev version with hot-reloading
- `npm run build` lint and build project for both environments
- `npm run build:web` build project for web, targeting es5, minified
- `npm run build:node` build project for node with `d.ts` support
- `npm run lint` run lint:src and lint:test
- `npm run lint:src` lint all .ts files in src
- `npm run lint:test` lint all test files
