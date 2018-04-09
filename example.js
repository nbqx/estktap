var test = require('tape'),
    estktap = require(__dirname);

test('extendscript tap test',function(t){
  estktap('this must be true',__dirname+'/test/fixtures/test/test.jsx',true);
  t.end();
});

test('extendscript tap test with target',function(t){
  estktap('this must be true',__dirname+'/test/fixtures/test/test.jsx',true,['indesign-13']);
  t.end();
});

test('extendscript tap test with function',function(t){
  estktap('deepEqual',__dirname+'/test/fixtures/test/obj.jsx',function(d){
    t.deepEqual(d,{x:0, y:0, width:3000, height: 5000});
  });
  t.end();
});

test('extendscript tap test with multiple targets and function',function(t){
  var targets = ['indesign-11','indesign-13'];
  estktap('deepEqual',__dirname+'/test/fixtures/test/obj.jsx',function(d){
    t.deepEqual(d,{x:0, y:0, width:3000, height: 5000});
  },targets);
  t.end();
});