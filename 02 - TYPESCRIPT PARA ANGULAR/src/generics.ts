//generics
function concatArray<T>(...itens: T[]): T[]{
    // o item de ... indica que tem varios itens 
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5],[3]);
const stringArray = concatArray<string[]>(["Ruan","batman"], ["Sadman"]);

//numArray.push("saitama")//está linha dará erro

console.log(numArray)
console.log(stringArray)