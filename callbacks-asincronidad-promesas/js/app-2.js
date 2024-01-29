// promesas

//Como crear una promesa
// Resolve: para decir que hacer si se cumple la promesa
//reject: para decir que hace si la promesa no se cumple
const premiarProyecto = new Promise((resolve,reject)=>{
    const premiados = true;

    setTimeout (()=>{
        if(premiados){
            resolve(["Sara","javier","Manuel"])
        }else{
            reject("nose pudo premiar a ningun grupo")
        }
    },1000);
});

//veridicando el estado de las promesas
console.log(premiarProyecto)

// como utilizar la promesa

premiarProyecto.then((resultado)=>{
    console.log("Los ganadores del consurso son:",  resultado.join("."));
}).catch((error) => {
    console.log(error);
});