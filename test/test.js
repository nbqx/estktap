var fs = require('fs'),
    exec = require('child_process').exec,
    test = require('tape');

var result = fs.readFileSync(__dirname+'/fixtures/output.txt')+'';

test('run test',function(t){
  exec('tape '+__dirname+'/../example.js',function(err,stdout,stderr){
    t.notOk(err,'no error');
    t.equal(stdout,result,'same output');
    t.equal(stderr,'','empty stderr');
    t.end();
  });
});
