"use strict";
/*classes
classe é um forma de reaproveitar
e criar varias coisas igual a seu formato
*/
class Character {
    constructor(stregth, skill) {
        //this se refere a class
        //this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    //metodos
    attack() {
        console.log(`attack with ${this.stregth} points`);
    }
}
//criando um personagem com nova instacia da classe charater
const P1 = new Character(10, 20);
//imprindio o P1 com seu metodo de ataque!!
//console.log();
P1.attack();
