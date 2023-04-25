"use strict";
//generics
function concatArray(...itens) {
    // o item de ... indica que tem varios itens 
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stringArray = concatArray(["Ruan", "batman"], ["Sadman"]);
//numArray.push("saitama")//está linha dará erro
console.log(numArray);
console.log(stringArray);
