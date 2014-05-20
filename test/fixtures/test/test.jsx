#target InDesign-7.0
#include "../myfn.jsx"

var doc = (app.documents.length===0)? app.documents.add() : app.activeDocument;
$.write(Myfn.count(doc)===1);
