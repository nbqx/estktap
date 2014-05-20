## estktap

tap([tape](https://github.com/substack/tape)) wrapper for testing adobe extendscript

## usage

myfn.jsx

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

test.jsx(for testing myfn.jsx)

```js
#target InDesign-7.0
#include "../myfn.jsx"

var doc = (app.documents.length===0)? app.documents.add() : app.activeDocument;
$.write(Myfn.count(doc)===1); // must
```

you should append `$.write(xxx)` at end in extendscript code for the test, because it uses tap test as output.

then write test.js

```js
var test = require('tape'),
    estktap = require('estktap');

test('this is adobe extendscript tap test',function(t){
  estktap('this must be true',__dirname+'/test/fixtures/test/test.jsx',true);
  t.end();
});
```

    $ node test.js

or

    $ tape test.js

`estktap` function takes 3 arguments, `estktap(message, jsx_script_path, is_a)`

`is_a` accepts number, string, boolean, also function. see `example.js`
