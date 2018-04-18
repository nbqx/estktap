var tape =  require('tape-catch'),
    fakestk = require('fakestk');

module.exports = estktap;

function estktap(mes,script,is_a,targets){
  // param target is optional and can be undefined
  var targetArr = ( Array.isArray(targets) )? targets.slice(0) : ["undefined"];
  // Shift params
  if( Array.isArray(is_a) ) targetArr = is_a.slice(0), is_a = undefined;

  var tLen = targetArr.length;
  // Index array for asynchronous pooping
  var targetIndex = Array.apply(null, {length: tLen}).map(Number.call, Number);
  
  if(typeof is_a !== 'function'){
    tape(mes,function(t){
      for (var i = 0; i < tLen; i++) { 
        fakestk.run(script,targetArr.pop(),function(err,res){
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
        fakestk.run(script,targetArr.pop(),function(err,res){
          if(err) return t.fail(err);
          var jsobj = (new Function('return '+res))();
          is_a(jsobj, t);
          if(targetIndex.pop() === 0) t.end();
        });
      };
    });
  };
};
