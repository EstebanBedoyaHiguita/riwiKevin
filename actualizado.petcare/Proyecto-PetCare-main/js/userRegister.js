

//Selectores
const urlBase = "http://localhost:3000/users"
const emailUser = document.querySelector("#email");
const passwordUser = document.querySelector("#password");
const birthDate = document.querySelector("#birthdate")
const nameUser = document.querySelector("#name")
const documentNumberUser = document.querySelector("#idCard")
const cellphoneUser = document.querySelector("#telphone")
const directionUser = document.querySelector("#housingAddress");
const formUserResgister = document.querySelector("#form");
const btnRedirect = document.querySelector("#submitLogin")
const formulario = document.querySelectorAll("#form");


//Eventos

formUserResgister.addEventListener("submit", (event) => {
    event.preventDefault();
    addUser()
});

btnRedirect.addEventListener("click", (event) => {
    event.preventDefault()
    formulario.classList.remove("was-validated");
    window.location = "userLogin.html"
})


async function addUser() {

    try {
        await fetch(urlBase, {
            mode: "no-cors",
            method: "POST",
            headers: {
                "contentType": "application/json",
            },
            body: JSON.stringify({
                birthdate: birthDate.value,                
                email: emailUser.value,
                passwordUser: passwordUser.value,
                nameUser: nameUser.value,
                documentNumberUser: documentNumberUser.value,
                cellphoneUser: cellphoneUser.value,
                directionUser: directionUser.value,
                [mascotas]: [{}]
            })
        })

    } catch {
        console.log("no entraron los datos")
    }
}