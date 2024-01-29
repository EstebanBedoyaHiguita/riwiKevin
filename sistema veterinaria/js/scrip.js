//variables

let datosPacientes = [{
    "id": 1705070027375,
    "nombreMascota": "zian",
    "fechaCita": "2024-01-24",
    "horaCita": "09:36",
    "nombreDueno": "esteban"
}];
//Selectores
const nombre = document.querySelector("#name_pet");
const fecha = document.querySelector("#date_cite");
const hora = document.querySelector("#time_cite");
const nombreP = document.querySelector("#name_person");
const sintomas = document.querySelector("#description");
const eliminarCita = document.querySelector("#eliminarCita")
const Editar = document.querySelector("#Editar")
const nombreMascota = document.querySelector("#nombreMascota");
const fechaCita = document.querySelector("#fechaCita");
const horaCita = document.querySelector("#horaCita");
const sintomasMascota = document.querySelector("#description");
const nombreDueno = document.querySelector("#nombreDueno");
const cards = document.querySelector("#cards")





const form = document.querySelector("form")
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    
    // nombreMascota.textContent = nombre.value    
    // fechaCita.textContent = fecha.value    
    // horaCita.textContent = hora.value    
    // sintomasMascota.textContent = sintomas.value
    // nombreDueno.textContent = nombreP.value
    
    const paciente = {
        id: crearId(),
        nombreMascota:nombre.value, 
        fechaCita: fecha.value, 
        horaCita: hora.value,
        nombreDueno: nombreP.value,
        sintomas:sintomasMascota.value }
    datosPacientes.push(paciente)

        

    form.reset()
    form.classList.remove("was-validated")

    guardarLs()
    pintar()
})

// eliminarCita.addEventListener("click",(event)=>{
    
//     nombreMascota.textContent = "Nombre mascota:"
//     fechaCita.textContent = "Fecha:"
//     horaCita.textContent = "Hora:"
//     sintomasMascota.textContent = ""

// })

// Editar.addEventListener("click",(event)=>{
//     console.log(nombreMascota.textContent);
//     nombre.value = nombreMascota.textContent
//     fecha.value = fechaCita.textContent 
//     hora.value = horaCita.textContent
//     sintomas.value =sintomasMascota.textContent
//     nombreP.value = nombreDueno.textContent
// })

//funciones

function guardarLs(){
    localStorage.setItem("datosPacientes", JSON.stringify(datosPacientes))
}

function traerls(){
    const datosString = localStorage.getItem("datosPacientes")
    const datosjn = JSON.parse(datosString)
    return datosjn
}

document.addEventListener('DOMContentLoaded', ()=>{
    datosPacientes = JSON.parse(localStorage.getItem('datosPacientes'))
    // let PAcientemostrar = datosPacientes[(datosPacientes.length -1)]
    // nombreMascota.textContent = PAcientemostrar.nombreMascota   
    // fechaCita.textContent = PAcientemostrar.fechaCita    
    // horaCita.textContent = PAcientemostrar.horaCita    
    // sintomasMascota.textContent = PAcientemostrar.sintomasMascota
    // nombreDueno.textContent = PAcientemostrar.nombreDueno


   
})


function pintar(){
  cards.innerHTML=''
    datosPacientes.forEach(paciente =>{
        crearCard(paciente)
        
    })
}

function crearCard(paciente){
    debugger
    console.log(paciente)
    const card = document.createElement("div")
    const nombreMascotaP = document.createElement("p")
    const fechaCitaP = document.createElement("p")
    const horaCitaP = document.createElement("p")
    const nombreDuenoP = document.createElement("p")
    const sintomasP = document.createElement("p")

    nombreMascotaP.textContent = paciente["nombreMascota"]
    fechaCitaP.textContent = paciente["fecha"]
    horaCitaP.textContent = paciente["hora"]
    nombreDuenoP.textContent = paciente["nombreDueno"]
    sintomasP.textContent = paciente["sintomas"]



    card.appendChild(nombreMascotaP)
    card.appendChild(fechaCitaP)
    card.appendChild(horaCitaP)
    card.appendChild(nombreDuenoP)
    card.appendChild(sintomasP)


    cards.appendChild(card)

    

    nombreMascotaP.id="nombreMascota"
    fechaCitaP.id="fechaCita"
    horaCitaP.id="horaCita"
    nombreDuenoP.id = "nombreDueno"
    sintomasP.id = "sintomas"





}



function crearId(){
    return Date.now() + Math.round(Math.random() + 10);
}