//Como crear una entidad(Clase)
 class Cliente {// el nombre debe ir en mayuscula la primera letra

    //Metodo constructor, es lo primero que va hacer la entidad cuando se use
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

 }

// Crear una instancia

const objetoCliente = new Cliente ("samuel", 40000);
const objetoCliente2 = new Cliente ("kevin", 40000);

console.log(objetoCliente);
console.log(objetoCliente2);

//Otra forma de crear clase pero no se usa

const users = class User {
    constructor(nombre,password){
        this.nombre = nombre;
        this.password = password;
    }
}