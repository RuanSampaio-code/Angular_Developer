"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* let dado:string = "jose Ruan";
console.log(dado); */
function exibirNome(target) {
    console.log(target);
}
//usando decorator: decorando funcao
let Funcionario = class Funcionario {
};
Funcionario = __decorate([
    exibirNome // gatilho em cima da class para disparar
], Funcionario);
let Senhorpadaria = class Senhorpadaria {
};
Senhorpadaria = __decorate([
    exibirNome
], Senhorpadaria);
