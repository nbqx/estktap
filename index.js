var tape =  require('tape'),
    fakestk = require('fakestk');

module.exports = estktap;

function estktap(mes,script,is_a,targets){
  // param target is optional and can be undefined
  if( !Array.isArray(targets) ) targets = ["undefined"];
  // Shift params
  if( Array.isArray(is_a) ) targets = is_a, is_a = undefined;
  
  var tLen = targets.length;
  // Index array for asynchronous pooping
  var targetIndex = Array.apply(null, {length: tLen}).map(Number.call, Number);
  
  if(typeof is_a !== 'function'){
    tape(mes,function(t){
      for (var i = 0; i < tLen; i++) { 
        fakestk.run(script,targets.pop(),function(err,res){
          if(err) return t.fail(err);
          var jsobj = (new Function('return '+res))();
          t.equal(jsobj,is_a,mes);
          if(targetIndex.pop() === 0) t.end();
        });
      };
    });
  }else{
    tape(mes,function(t){
      for (var i = 0; i < tLen; i++) {
        fakestk.run(script,targets.pop(),function(err,res){
          if(err) return t.fail(err);
          var jsobj = (new Function('return '+res))();
          is_a(jsobj);
          if(targetIndex.pop() === 0) t.end();
        });
      };
    });
  };
};
