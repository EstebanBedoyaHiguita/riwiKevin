const formAuthor = document.querySelector("#formAuthor")
const  nameAuthor = document.querySelector("#name")
const ageAhutor = document.querySelector("#age")
const formBook = document.querySelector("#formBooks")
const nameBook = document.querySelector("#nameBook")
const dateBook = document.querySelector("#dateBook")
const authorBook = document.querySelector("#authorBook")
const idAuthor = document.querySelector("#idAuthor")
const listBooks = document.querySelector("#listBooks")


const urlAhutors = "http://localhost:3000/authors"
const urlBooks = "http://localhost:3000/books"

//Eventos

document.addEventListener("DOMContentLoaded", ()=>{
    loadSelectAuthor()
    getbooks()
})

formAuthor.addEventListener("submit", (event) =>{
    event.preventDefault()

    createAhutor()
})

formBook.addEventListener("submit", (event)=>{
    event.preventDefault()
    createBooks()
})
async function getbooks(){
    const response = await fetch (`${urlBooks}?_embed=author`)
    const data = await response.json()
    
    data.forEach(books =>{
        listBooks.innerHTML +=`
        <li>Name: ${books.name}, Date:${books.date}, Author: ${books.author.name}</li>`
    })

}

function createBooks(){
    const newBook = {
        name: nameBook.value,
        date: dateBook.value,
        authorId:authorBook.value
    }

    fetch(urlBooks,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newBook)
    })
}

// authors.forEach(actor => {
//     const option = document.createElement ("<option>")

//     option.textContent = actor.name
    
// });
async function loadSelectAuthor(){
    //1.Obtener todos los autores -> GET
    
   const response = await fetch (urlAhutors)
   const data = await response.json()
   
   //2. Recorrer la lista de autores y por cada autor crear una etiqueta option, llenar el value 
    //y el titulo y agregarlo dentro del select
   data.forEach(autor => {

    const option = document.createElement("option")
    option.value = autor.id
    option.textContent = autor.name
    authorBook.appendChild(option)
    
   });


}

function createAhutor(){
    fetch (urlAhutors,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({name: nameAuthor.value, 
            age: ageAhutor.value

        })

    })
}






