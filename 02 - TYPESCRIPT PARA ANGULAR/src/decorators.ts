/* let dado:string = "jose Ruan";
console.log(dado); */
//decorators

function ApiVersion(version:string){

    return (target: any)=> {
        Object.assign(target.prototype, {__version: version,__name: "Ruan"});
    }
}

//atrribute decorator

function minLenght(length: number) {
    return (target :any, key: string) => {

        let _value = target[key];
        //console.log()

        const getter = () => "[play]" + _value;
        const setter = (value: string)=>{
            if (value.length < length) {
                    throw new Error(`Tamanho menor do que ${length}`);
            }else{
                _value = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}

class Api{
    @minLenght(10)
    name:string;

    constructor(name:string){
        this.name = name;
    }
}
const api = new Api("ouaaaaaaaaaaaaaas");
console.log(api.name);


