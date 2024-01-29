const inpunSearch=document.querySelector("#search")
const container = document.querySelector(".cards-container")
const btnsShowmore = document.querySelectorAll(".btn-show")

let timer ;
//eventos

function loadEventListenieBtn(){
    const btnsShowmore=document.querySelectorAll(".btn-show");
    
    btnsShowmore.forEach(btn => {
        btn.addEventListener("click",() =>{
            
        const movieId = btn.getAttribute("movie-id")
        console.log(movieId);
        verMasInformacion(movieId)


        })
    })
}

inpunSearch.addEventListener("input", (event)=>{
    clearTimeout (timer)
    timer = setTimeout(() => {
        getMovies(event.target.value);
    }, 500);
    
    
})

async function getMovies (title){
    const URL = `https://www.omdbapi.com/?&i=tt3896198&apikey=6e352b9b&s=${title}`
    const respons = await fetch(URL)
    const data = await respons.json()
    

    printMnovies(data.Search)

}

function printMnovies(movies){
    cleanHTML()
    //Preguntar si no hay peliculas con ese nombre

    if (!movies){
        const titleAlert = document.createElement ("h2")
        titleAlert.textContent = "No se encontraron peliculas con este nombre 😢😢😢 " 
        titleAlert.classList.add("alert")
        container.appendChild(titleAlert)
        return
    }

    movies.forEach(movie => {
        container.innerHTML +=`
        <div class="card">
            <img src="${movie.Poster}"
             alt="poster">

            <h2 class="title-card">${movie.Title} </h2>
            <p>año <span>${movie.Year}</span></p>
            <p>tipo <span>${movie.Type}</span></p>
            <button type="button" class ="btn-show" movie-id="${movie.imdbID}">Ver mas</button>
            

        </div>`
        loadEventListenieBtn()
        
    });
}

function cleanHTML(){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }

}

async function verMasInformacion(movieId){
    
        const URL = `https://www.omdbapi.com/?&apikey=6e352b9b&i=${movieId}`
        const respons = await fetch(URL)
        const data = await respons.json()
        console.log(data);

        pintarHtml(data)

}


function pintarHtml(informacion){
    cleanHTML()
    container.innerHTML += `
    <div class="card">
        <img src="${informacion.Poster}"
         alt="poster">

        <h2 class="title-card">${informacion.Title} </h2>
        <p>año <span>${informacion.Year}</span></p>
        <p>tipo <span>${informacion.Type}</span></p>
        
        

    </div>`
}
