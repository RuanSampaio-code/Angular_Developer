//Interfaces (type x interface)

//o type é usado para tipar um conjubnto de objetos 
type robot = {
    readonly id:number |string;
    name:string;
};

//interface: não tem '='
//usada quando se vai trabalhar com class
interface robot2{
    // readonly é um modificador de acesso que limita o acesso
    readonly id:number | string; 
    name: string;
    sayHello():string
}

const bot1 :robot ={
    id:"1",
    name:"megaman"
};

const bot2 :robot2 ={
    id: "1",
    name: "megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

//printando os objetos de interface e type
console.log(bot1);
console.log(bot2);

class Pessoa implements robot2{
    id: string | number;
    name: string;

    constructor(id :string | number , name:string ){
        this.id = id
        this.name = name;
    }
    sayHello(): string {
      return `hello i'am ${this.name}`;
    }

}

const p = new Pessoa(1,"Gustman")
console.log(p.sayHello());