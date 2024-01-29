export async function consumirAPI (mensaje) {
try{
    const URL= "https://jsonplaceholder.typicode.com/photos"
    const respuesta = await fetch(URL)
    const datos = await respuesta.json()
    imprimirDatos(datos.splice(1,100))
}catch (error){
    console.log(error);

}}

function imprimirDatos(datos){
    datos.forEach(element => {
        document.body.innerHTML += `
        <div class="card" style="width: 18rem;">
  <img src="${element.url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title" style =" height: 6rem;">${element.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
        
    });

}

const mensaje = "Hola desde consumir api"
export default mensaje;


