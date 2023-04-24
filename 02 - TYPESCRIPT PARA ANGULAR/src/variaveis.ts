//Tipois primitivos: booleam, number , string
let ligado:boolean = false;
let nome:string = "Ruan";
let idade:number = 23;

//funciona tmb com valores decimais
let altura:number = 1.9;

//tipos especiais:null, void
let nulo:null = null;
let indefinido:undefined = undefined;

//tipos abragentes: any, void
let retorno:void
let retornoView:any = false // pode retornar qualquer coisa

//objeto - sem previsibilidade
let produto:object = {
    name: "Ruan",
    cidade: "São luis",
    idade: 19,
};

//objeto tipado - com previsibilide
type ProdutoLoja = {
    nome:string;
    preco:number;
    unidades:number;
};

let meuproduto: ProdutoLoja = {
    nome: "tenis",
    preco: 99,
    unidades: 20
};

/* 
    arrays
*/
//duas maneiras de declarar

let dados: string[] = ["Ruan", "Newton", "carlos"];
let dados2:Array<string> =  ["Ruan", "Newton", "carlos"];

//Trabalhando com Arrays de Multi Types
let infos:(string | number)[] = ["Felipe", 19] ;

/* 
Tuplas: array com ordem das informações
*/

let boleto:[string,number, number] = ["Agua", 200, 200] ;

/* arrays Métodos */

/* 
    Tipo datas
*/

let aniversario:Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());

/* type hero ={
    name: string;
    vulgo: string;

};

function printaObjetos(pessoa: hero){
    console.log(pessoa)
}

//comentario
printaObjetos({
    name: "Bruce",
    vulgo: "batman",

})
console.log('ola mundo'); */