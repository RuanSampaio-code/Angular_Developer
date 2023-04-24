"use strict";
//Tipois primitivos: booleam, number , string
let ligado = false;
let nome = "Ruan";
let idade = 23;
//funciona tmb com valores decimais
let altura = 1.9;
//tipos especiais:null, void
let nulo = null;
let indefinido = undefined;
//tipos abragentes: any, void
let retorno;
let retornoView = false; // pode retornar qualquer coisa
//objeto - sem previsibilidade
let produto = {
    name: "Ruan",
    cidade: "São luis",
    idade: 19,
};
let meuproduto = {
    nome: "tenis",
    preco: 99,
    unidades: 20
};
/*
    arrays
*/
//duas maneiras de declarar
let dados = ["Ruan", "Newton", "carlos"];
let dados2 = ["Ruan", "Newton", "carlos"];
//Trabalhando com Arrays de Multi Types
let infos = ["Felipe", 19];
/*
Tuplas: array com ordem das informações
*/
let boleto = ["Agua", 200, 200];
/* arrays Métodos */
/*
    Tipo datas
*/
let aniversario = new Date("2022-12-01 05:00");
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
