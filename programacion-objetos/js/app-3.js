//herencia

class Cliente{
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    imprimirSaldo (){
        return `Hola ${this.nombre}, tu saldo es ${this.saldo}`;
    }
    retirarSaldo (retiro){
        this.saldo -= retiro;
    }
    static bienvenida (){
        return "Hola, bienvenido al cajero"
    }
}

//Empresa va heredar todos los atrbutos y metodos del cliente
class Empresa extends Cliente  {

    //Encapsulaciones

    #nit = ""
    constructor (nombre,saldo,telefono,tipo,nit){
        //El metodo super activa el constructor del padre
        super(nombre,saldo)
        this.telefono = telefono;
        this.tipo = tipo;
        this.#nit = nit;
    }
    obtenerNit (){
        return `${this.#nit}`;
    }
    // polimorfismo
    static bienvenida(){
        return "Hola, bienvenido al cajero para empresas"
    }
}

const kevin = new Cliente ("kevin", 400)
console.log(Cliente.imprimirSaldo);

console.log(kevin.imprimirSaldo());

//intancia de empresa

const empresa = new Empresa ("Riwi",2000,"312218","desarollo","32342344")
console.log(Empresa.bienvenida());
console.log(empresa.imprimirSaldo());
//para obtener el valor del atributo privado, debemos llamar el metodo encargado de ello
console.log(empresa.obtenerNit());






