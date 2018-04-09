# estktap

tap([tape](https://github.com/substack/tape)) wrapper for testing adobe extendscript

## usage

The `estktap` function takes 4 arguments:

    estktap(message, jsx_script_path, is_a, targets)

1. `message` String: Description

2. `jsx_script_path` _String_: Path to script to test

3. `is_a` _Number_, _String_, _Boolean_, _Function_: Comparitor

4. `targets` _Array_: (Optional) List of targets

> version number needs to be specified in targets `[indesign-7.0,indesign-11]` see [versions.json](https://github.com/nbqx/fakestk/blob/master/resources/versions.json)  

## example

### script to test

+ myfn.jsx

```js
Myfn = this.Myfn || {};

// return Document page length
Myfn.count = function(doc){
  if(doc.hasOwnProperty("pages")){
    return doc.pages.length
  }else{
    return undefined
  }
};

// add new Page to Document
Myfn.add = function(doc){
  if(doc instanceof Document){
    doc.pages.add();
  }
  return doc;
};
```

### write test

+ test.jsx (for testing myfn.jsx)

```js
#target InDesign-7.0
#include "../myfn.jsx"

var doc = (app.documents.length===0)? app.documents.add() : app.activeDocument;
$.write(Myfn.count(doc)===1); // must
```

> You should append `$.write(xxx)` at end in extendscript code for the test, because it uses tap test as output.

### create runner

+ test.js (for running test.js)

```js
var test = require('tape'),
    estktap = require('estktap');

test('this is adobe extendscript tap test',function(t){
  estktap('this must be true',__dirname+'/test/fixtures/test/test.jsx',true);
  t.end();
});
```

### run

    $ node test.js

or

    $ tape test.js

## more examples

See [`example.js`](./example.js)
