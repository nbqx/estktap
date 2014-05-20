var tape =  require('tape'),
    fakestk = require('fakestk');

module.exports = estktap;

function estktap(mes,script,is_a){
  if(typeof is_a !== 'function'){
    tape(mes,function(t){
      fakestk.run(script,function(err,res){
        if(err) return t.fail(err);
        var jsobj = (new Function('return '+res))();
        t.equal(jsobj,is_a,mes);
        t.end();
      });
    });
  }else{
    tape(mes,function(t){
      fakestk.run(script,function(err,res){
        if(err) return t.fail(err);
        var jsobj = (new Function('return '+res))();
        is_a(jsobj);
        t.end();
      });
    });
  }
};
