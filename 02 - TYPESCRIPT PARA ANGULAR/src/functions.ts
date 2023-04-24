//funcoes
//podemos tipar tanto os parametros como seu retorno da função
function addNumber(x:number,y:number): number{
    return x + y;
}

function addtoHello(name:string){
    return `hello ${name}`
}

function CalltoPhone(phone: number | string): number | string {
    return phone;
}

//função assincrona
async function getDatabase(id:number):Promise<string> {

    return "Ruan";
    
}


let soma:number = addNumber(4,5);
console.log(soma);

console.log(addtoHello("Ruan"))

console.log(CalltoPhone('84665582'))

//funçõeos multi Tipos


