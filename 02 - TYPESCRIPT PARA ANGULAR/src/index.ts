/*classes
classe é um forma de reaproveitar 
e criar varias coisas igual a seu formato
*/

//estrutura básica de uma class

class Character{
    name?: string; //deixando a propriedade name como opcional
    stregth : number;
    skill: number;

    constructor(stregth : number, skill:number){
        //this se refere a class
        //this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    //metodos
    attack(): void{
        console.log(`attack with ${this.stregth} points`)
    }
}

//criando um personagem com nova instacia da classe charater
const P1 = new Character(10,20);

//imprindio o P1 com seu metodo de ataque!!
//console.log();
P1.attack();
