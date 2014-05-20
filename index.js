var tape =  require('tape'),
    fakestk = require('fakestk');

module.exports = estktap;

function estktap(mes,script,is_a){
  tape(mes,function(t){
    t.plan(1);
    fakestk.run(script,function(err,res){
      if(err) return t.fail(err);
      var jsobj = (new Function('return '+res))();
      t.equal(jsobj,is_a,mes);
      t.end();
    });
  });
};
