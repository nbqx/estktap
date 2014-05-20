var test = require('tape'),
    estktap = require(__dirname);

test('this is adobe extendscript tap test',function(t){
  estktap('this must be true',__dirname+'/test/fixtures/test/test.jsx',true);
  t.end();
});

