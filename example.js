var test = require('tape'),
    estktap = require(__dirname);

test('this is adobe extendscript tap test',function(t){
  estktap('this must be true',__dirname+'/test/fixtures/test/test.jsx',true);
  t.end();
});

test('this is adobe extendscript tap test',function(t){
  estktap('deepEqual',__dirname+'/test/fixtures/test/obj.jsx',function(d){
    t.deepEqual(d,{x:0, y:0, width:3000, height: 5000});
  });
  t.end();
});

