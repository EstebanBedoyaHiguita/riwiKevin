// Agregar metodos a las clases

class Cliente {
    constructor (nombre,saldo){
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



//instancio la clase y la guardo en una variable
const objCliente = new Cliente ("kevin",400)
console.log(Cliente.bienvenida());


//Uso el metodo  para retirar el saldo de la instancia creada anteriormente
objCliente.retirarSaldo(250);

// Finalmente imprimo el saldo restante
console.log(objCliente.imprimirSaldo());

