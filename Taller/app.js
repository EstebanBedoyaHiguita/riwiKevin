const container = document.querySelector(".cards-container")


async function getEnvios (){
    const URL = `https://api.spacexdata.com/v3/launches`
    const respons = await fetch(URL)
    const datos = await respons.json()
    
    pintarLanzamientos (datos)

}

getEnvios ()

function pintarLanzamientos (datos){
    

    container.innerHTML =""
    datos.forEach(element => {

        container.innerHTML+=`<div class="card">
        <img src="${element.links.mission_patch}"
         alt="poster">

        <h2 class="title-card" style="color:rgb(27, 24, 216)">${element.mission_name}</h2>
        <p><span>${element.launch_year}</span></p>
        <button type="button" data-id="${element.flight_number}" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Ver Inf-Mision
  </button>
    </div>`

        
    });
    const botones = container.querySelectorAll("button")
    agregarEventosBotones(botones)
}

async function obtenerId(id){

    const URL = `https://api.spacexdata.com/v3/launches/${id}`
    const respons = await fetch(URL)
    const datosId = await respons.json()

    pintarModal(datosId)


}

function pintarModal (data){
    
    const modalbody = document.querySelector(".modal-body") 
    modalbody.innerHTML = `<div class="modal-header">
    <h1 class="modal-title fs-5" id="exampleModalLabel">SPACEX</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
  <iframe src="https://www.youtube.com/embed/"${data.links.youtube_id}></iframe>
  <table class="table table-dark table-striped">
    <tbody>
        <tr>
            <td>Cohete:</td>
            <td>${data.mission_name}</td>
        </tr>
        <tr>
            <td>Tipo cohete:</td>
            <td>${data.rocket_type}</td>
        </tr>
        <tr>
            <td>Exito Lanzamiento:</td>
            <td>${data.launch_success}</td>
        </tr>
    </tbody>
  </table>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  </div>`


}


function agregarEventosBotones(botones){
    
    botones.forEach(boton =>{
    boton.addEventListener("click", () => {
        const id = boton.getAttribute("data-id")
        obtenerId(id)

        console.log(id);
    })
})
}

