//consumir el archivo txt
// y vamos a pintar en el dom cuando el usuario haga click en el boton cargar texto

//Selectores
let resultado2;
let resultado;

const loadtext = document.querySelector("#loadtext");
const text = document.querySelector("#text");
const datos = document.querySelector(".datos");

loadtext.addEventListener("click", consumirTxtSegundaForma);

function organizarDatos(resultado2) {
  // const tabla = document.querySelector("#tablaDtos")
  const dtosTabla = document.querySelector("#datosTabla");
  dtosTabla.innerHTML = ""
  
   resultado2.forEach((element) => {
    dtosTabla.innerHTML += `
    <tr>
        <td>${element.nombre}</td>
        <td>${element.edad}</td>
        <td>${element.carrera}</td>
        <td>${element.matricula}</td>
        <td>${element.imagen}</td>
        <td>${element.promedio}</td>
        <td>${element.ciudad_nacimiento}</td>
        <td>${element.telefono}</td>
        <td>${element.email}</td>
        <td>${element.direccion}</td>
        <td>${element.genero}</td>   
        </tr>    
    `;
  });

  
}

//Funciones
// function consumirTxt(){
//     const URL = "data/data.txt"
//fetch API es un servicio propio de js
//Nos permite realizar solicitudes http y tambien locales
//a fetch tenemos que enviarle como paramentro la  URL  de donde es
// Envuentra la informacion - fetch es una promesa
// fetch(URL).then((respuesta)=>{
//     console.log(respuesta.status);
//     console.log(respuesta.statusText);
//     console.log(respuesta.url);

//     return respuesta.text()
// })
// .then((resultado)=>{
//     console.log(resultado);
//     text.textContent = resultado
// })
// .catch((error)=>{
//     console.log("Opps, ocurrio un error", error);
// })

// }
//Segunda forma
async function consumirTxtSegundaForma() {
  try {
    // Plan A
    const URL = "data/data.json";
    let respuesta = await fetch(URL);
    console.log(respuesta);
    resultado = await respuesta.text()
    let resultado2 = await (JSON.parse(resultado))

    
    console.log(resultado2);




    organizarDatos(resultado2) 
    // console.log(resultado);
  } catch (error) {
    // Plan B
    console.error("Error Consumir: ",error);
  }
}
