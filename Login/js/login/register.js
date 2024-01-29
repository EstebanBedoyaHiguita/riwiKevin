//Selectores y variables globales

const form = document.getElementById("formRegister")
const userEmail = document.getElementById("userEmail")
const userPassword = document.getElementById("userPassword")
const passwordComfirtmate = document.getElementById("passwordComfirmate")
const URL = "http://localhost:3000/users"
//eventos

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    createUser()
})


async function createUser(){
    //validar la informacion

    if(!validatePassword()){
        showAlert("contraseña no valida")
        return

}
    if( await validateEmail()){
        showAlert("El email ya esta registrado")
        return
    }
    console.log("PASASTE LAS VALIDACIONES");
try{
    await fetch(URL,{
        method:"POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({
            email: userEmail.value,
            password: userPassword.value
        })
    })
}catch(error){
    showAlert("Ocurrio un error al crear un usuario")
}
}


function validatePassword(){
    const  regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    //validar que las 2 contraseñas sean iguales, tengan una minima longitud de 6
    //caracteres y tengan un caracter especial
    return (userPassword.value === passwordComfirtmate.value && regex.test (userPassword.value))
}




function showAlert(msg){
    Swal.fire({
        title: 'Error!',
        text: msg,
        icon: 'error',
        confirmButtonText: 'Cool',
        showConfirmButton:false,
        timer: 4000,
        toast: "true",
        position: "bottom-right"
      })
}

async function validateEmail(){
    try{
        //
        const Response = await fetch (`${URL}?email=${userEmail.value}`)
        const data = await Response.json()
        //si data tiene elementos quiere decir que ese email ya esta registrado
        console.log(data);
        return data.length

    }catch(error){
        return false

    }
}