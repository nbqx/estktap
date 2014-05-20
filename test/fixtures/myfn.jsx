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


