const urelBase = "http://localhost:3000/users"

//SElectores

const userForm = document.querySelector("#userForm")
const tbody = document.querySelector("#tbody")
const userName = document.querySelector("#userName")
const userAge = document.querySelector("#userAge")
const idUser = document.querySelector("#idUser")


//Eventos
document.addEventListener("DOMContentLoaded", ()=>{
    //Llamar la funcion encargada de obtener los usuarios
    getUsers()
    
})

userForm.addEventListener("submit", (event)=>{
    //Quitar acciones por defecto
    event.preventDefault

    if (idUser.value){
        updateUser(idUser.value)
    }else{
        addUser()
    }

    
    
})
//Funcion para agregar un usuario
async function addUser(){
    
    //Guardo la informacion del usuario en un objeto
    const newUser = {
        name: userName.value,
        age: userAge.value
    }
    //Hago mi peticion HTTP

    // Verbos HPTT
    //1. GET > Obtener
    //2. POST > crear
    //3. PUT > Actualizar
    //4. DELET > Eliminar

    await fetch(urelBase,{

        //Method Especifico el metodo de la funcion
        method:"POST",
        heders:{
            //Indico en que formato voy a enviar la informacion
            "Content-Type": "application/json"
        },
        //Envio la información
        body: JSON.stringify(newUser)
    })
    
    
}

async function getUsers(){
   try {
    const respons = await fetch (urelBase) 
    const data = await respons.json()
    renderUser(data);
} catch(error){
    console.log(error);
}




}


// funcion para mostrar los usuarios en el html

function renderUser(users){
    users.forEach(user => {

        //td
        const tdName = document.createElement("td")
        const tdAge = document.createElement("td")
        const tdActions = document.createElement("td")
        
        //Buttons
        const btnUpdate = document.createElement("button")
        const btnDelete = document.createElement("button")

        //tr
        const tr = document.createElement("tr")

        btnDelete.classList.add("btn", "btn-danger","mx-2")
        btnUpdate.classList.add("btn", "btn-primary","mx-2")

        btnDelete.textContent = "Delete"
        btnUpdate.textContent = "Edit"

        btnDelete.addEventListener("click", ()=>{
            deleteUser(user.id)
        
        })
        btnUpdate.addEventListener("click", ()=>{
            editUser(user)
        })

        tdName.textContent = user.name
        tdAge.textContent = user.age

        //Appenchilds

        tdActions.appendChild(btnDelete)
        tdActions.appendChild(btnUpdate)

        tr.appendChild(tdName)
        tr.appendChild(tdAge)
        tr.appendChild(tdActions)

        tbody.appendChild(tr)
    });

}

async function deleteUser(id){
    await fetch(`${urelBase}/${id}`,{
        method: "DELETE"
    })

    getUsers()

}

function editUser(user){
    userAge.value = user.age
    userName.value = user.name
    idUser.value = user.id
}

async function updateUser(id){
    const newUser = {
        name: userName.value,
        age: userAge.value
    }
    await fetch(`${urelBase}/${id}`,{
        method: "PUT",
        heders:{
            //Indico en que formato voy a enviar la informacion
            "Content-Type": "application/json"
        },
        //Envio la información
        body: JSON.stringify(newUser)
        
    })
    
}