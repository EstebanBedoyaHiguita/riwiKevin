const URL = "http://localhost:3000/users"
//Selectors
const containerPet = document.querySelector(".containerPet");
const seeMyPets = document.getElementById("seeMyPets");
const formAddPet = document.getElementById("formAddPet");
const IdPet = document.querySelector(".IdPet")
const petSpecies = document.querySelector(".petSpecies")
const race = document.querySelector(".race")
const ownerName = document.querySelector("#ownerName")
const phone = document.querySelector("#inputPhone")
const date = document.querySelector("#date")
const hour = document.querySelector("#hour")
const btonConsulta = document.querySelector("#SolicitarConsulta")
const table = document.querySelector(".petAppointmentsTable")



const addVeterinaryConsultation = document.getElementById(
  "addVeterinaryConsultation"

);

const seeVetConsultation = document.querySelector("#seeVetConsultation");
const selectPet = document.querySelector(".selectPet");
let canceldVeterinaryConsultationBtn;


//Events
function btns() {
  console.log(canceldVeterinaryConsultationBtn)
  canceldVeterinaryConsultationBtn.forEach((element) => {
    element.addEventListener("click", () => {
      console.log("hola")
      printPets()   
    })
  })
}


seeMyPets.addEventListener("click", () => {
  displayMyPetsCard();
});

seeVetConsultation.addEventListener("click", () => {
  showVetConsultation();
});

formAddPet.addEventListener("click", () => {
  
  showForm();
});

addVeterinaryConsultation.addEventListener("click", () => {
  showPetForAddConsultation();
});

//Functions
function printPets() {
  console.log("hola")
  Swal.fire({
    title: "Do you want to cancel the cite?",

    confirmButtonText: "cancel",
    // showCancelButton: false,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Canceled!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  })
}
//formulario para agregar mascota
function showForm() {
  containerPet.innerHTML = `
            
                <form id="idfrmaddpet">
                    <h2 class="titleFormRegisterPet">Registrar mascota</h2>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Agrega una foto de tu mascota</label>
                        <input class="form-control" type="file" id="formFile">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="typePetInput" placeholder="Tipo de mascota">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="namePetInput" placeholder="Nombre mascota">
                    </div>        
                    <div class="mb-3">
                        <input type="text" class="form-control" id="genderInput" placeholder=" Macho / Hembra">
                    </div>        
                    <div class="mb-3">
                        <input type="number" class="form-control" id="ageInput" placeholder="Edad aproximada mascota en meses">
                    </div>        
                    <div class="mb-3">
                        <input type="number" class="form-control" id="weightPetInput" placeholder="Peso aproximado">
                    </div>        
                    <div class="mb-3">
                        <input type="text" class="form-control" id="foodInput" placeholder="¿Que concentrado consume?">
                    </div>   
                    <button type="submit" class="btn btn-outline-success addPet">Agregar mascota</button>    
                </form>
        
            `;
            //ESTEBAN

            
            const frmaddpet = document.querySelector("#idfrmaddpet")
            const nombrePet = document.querySelector("#namePetInput")
            const type = document.querySelector("#typePetInput")
            const ageInput = document.querySelector("#ageInput")
            const weightPetInput = document.querySelector("#weightPetInput")
            const foodInput = document.querySelector("#foodInput")
            const gender = document.querySelector("#genderInput")

            
            frmaddpet.addEventListener("submit", (event)=>{
              event.preventDefault();
              console.log(nombrePet);
              addPet()
            
            })
            //funtion
            //Agregar
            async function addPet(){
              console.log(nombrePet);
              const newPet = {
                "name":nombrePet.value,
                "type":type.value,
                "gender":gender.value,
                "ageInput": weightPetInput.value,
                "foodInput": foodInput,
                "weightPetInput":weightPetInput.value
              }

              const  response = await fetch (URL,{
                method: "POST",
                heards:{"Content-Type": "application/json"},
                body: JSON.stringify(newPet)

              });
              
            }
            }

function displayMyPetsCard() {
  containerPet.innerHTML = `
            
            <div class="seeMyPetsContainer">
    
                <div class="cardPet">
                    <div class="card">
                        <img src="img/gato sentado.jpg" class="card-img-top" alt="Photo Pet">
                        <div class="card-body">
                            <h5 class="card-title" id="namePet">Nombre de mascota</h5>
                            <span class="card-text">
                                <ul class="list-group list-group-flush">
                                <li class="list-group-item" id="typePet">Tipo de mascota: </li>
                                <li class="list-group-item" id="gender">Genero: </li>
                                <li class="list-group-item" id="age">Edad aprox: </li>
                                <li class="list-group-item" id="weightPet">Peso aproximado: </li>
                                <li class="list-group-item" id="food">Concentrado: </li>
                                </ul>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        
        `;
}
//Seleccionar mascota para consulta
function showPetForAddConsultation() {
  containerPet.innerHTML = `

            <div class="selectPet">

                <h2>Selecciona una mascota para la consulta</h2>

                <div class="card">
                <img src="img/gato sentado.jpg" class="card-img-top" alt="Photo Pet">
                <div class="card-body">
                    <h5 class="card-title" id="namePet">Nombre de mascota</h5>
                </div>
                <div class="card-footer">
                    <button type="button" id="selectPetForConsultation" class="btn btn-outline-success"
                    >
                    Seleccionar
                    </button>
                </div>
                </div>

            </div>
        `;

  const selectPetForConsultationBtn = document.getElementById(
    "selectPetForConsultation"
  );
  console.log(selectPetForConsultationBtn);
  selectPetForConsultationBtn.addEventListener("click", () => {
    showPetForAddConsultationAdd();
  });
}
//Agregar informacion para agendar cita /// Estraer info
async function showPetForAddConsultationAdd() {

  containerPet.innerHTML = `

            <form class="formAddVeterinaryConsultation">
                
                <h3 class="namePet">Nombre:</h3>
                <h5 class="IdPet">ID Mascota: </h5>
                <h6 class="type">Especie: </h6>
                <h6 class="gender">Genero: </h6>
                <h6 class="race">Raza: </h6>

                <div>
                <label for="ownerName" class="form-label">Nombre del propietario: </label>
                <input type="text" class="form-control" id="ownerName">
                </div>
                <div>
                <label for="inputPhone" class="form-label">Telefono de la contacto: </label>
                <input type="tel" class="form-control" id="inputPhone">
                </div>
                <div>
                <label for="date" class="form-label">Fecha de la consulta:</label>
                <input type="date" class="form-control" id="date">
                </div>
                <div>
                <label for="hour" class="form-label">Hora de consulta: </label>
                <input type="time" class="form-control" id="hour">
                </div>
                <div>
                <label for="exampleFormControlTextarea1" class="form-label">Sintomas: </label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <br>
                <button class="btn btn-outline-success">Solicitar consulta</button>
            </form>
        `;
}

function showVetConsultation() {
  containerPet.innerHTML = `

            <div class="tableVeterinaryConsultation">

                <table class="table tableVeterinaryConsultation">
                <thead>
                    <tr>
                    <th scope="col">Mascota</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Hora</th>
                  
                    <th scope="col">Direccion</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr>
                    <td>Chimuelo</td>
                    <td>20/02/2024</td>
                    <td>10:10</td>
                    <td>Pepito Perez</td>
                    <td>Callejon Diagonal</td>
                    <td><button class="canceldVeterinaryConsultation" data-id="">Cancelar</button></td>
                    </tr>
                    <tr>
                    <td>Jacob</td>
                    <td>10/03/2024</td>
                    <td>9:00</td>
                    <td>Dormunt</td>
                    <td><button class="canceldVeterinaryConsultation">Cancelar</button></td>
                    </tr>
                </tbody>
                </table>
            </div>
        `;

        canceldVeterinaryConsultationBtn = document.querySelectorAll(
          ".canceldVeterinaryConsultation"
        );

        btns()

}






