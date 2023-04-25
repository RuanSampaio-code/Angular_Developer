/*classes
classe é um forma de reaproveitar 
e criar varias coisas igual a seu formato
*/


/* 
data modifilers
tipos:

    private: apenas visivil dentro da classe
    public : por padrão sem colocar um data modifilers
    proteced: so pode ser enchergado da classe e subclasses

    obs: são aplicaveis  tambem aos métodos
*/

//estrutura básica de uma class
class Character{
    protected name?: string; //com propriedade private, ela só pode ser acessada por dentro da classe
    stregth : number;
    skill: number;

    constructor(name:string, stregth : number, skill:number){
        //this se refere a class
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    //metodos
    public attack(): void{
        console.log(`attack with ${this.stregth} points`)
    }
}

//character: superclass
//subclasse: classe que herda de outra classe
class Magician extends Character{ //classe extencao de outra
    magicPoints : number;
    
    constructor(
        name:string, 
        stregth : number, 
        skill:number,
        magicPoints : number
    ){    
        //chamada da superchasse
        super(name, stregth ,skill)
        this.magicPoints = magicPoints 
        //this.name  -> protects sendo visivel na subclasse
    }    
}

//criando um personagem com nova instacia da classe charater
const P1 = new Character("Ryu",10,20);

//com a nova classe
const p2 = new Magician("Ryu",10,20, 100)

//imprindio o P1 com seu metodo de ataque!!
//console.log();
P1.attack();
