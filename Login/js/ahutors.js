const URLAthor = "http://localhost:3000/authors"

const nombre = document.querySelector("#name")
const age = document.querySelector("#age")
const save = document.querySelector("#save")


save.addEventListener("click", (event)=>{
    event.preventDefault()

    agregarAuthor()
})

async function agregarAuthor(){
    const agregarAuthor = {
        "nombre":nombre.value,
        "edad":age.value
    }
    const response = await fetch (URLAthor,{
        method: "POST",
        headers:{
            "Content-Type":"aplication/json"
        },
        body:JSON.stringify(agregarAuthor)
    })

    

}