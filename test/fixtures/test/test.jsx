#target InDesign-11
#include "../myfn.jsx"

var doc = (app.documents.length===0)? app.documents.add() : app.activeDocument;
$.write(Myfn.count(doc)===1);
