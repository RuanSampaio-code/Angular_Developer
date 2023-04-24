"use strict";
//Interfaces (type x interface)
const bot1 = {
    id: "1",
    name: "megaman"
};
const bot2 = {
    id: "1",
    name: "megaman",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
//printando os objetos de interface e type
console.log(bot1);
console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello i'am ${this.name}`;
    }
}
const p = new Pessoa(1, "Gustman");
console.log(p.sayHello());
