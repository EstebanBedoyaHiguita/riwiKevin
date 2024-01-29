const categorias =[];

consumirAPI()

async function consumirAPI(){
    const URL = "https://api.escuelajs.co/api/v1/categories"

    const response = await fetch(URL)

    const data = await response.json();

    data.forEach(categoria => {
        
        const nombre = categoria.name

        const img = categoria.image

        console.log(nombre);
        console.log(img);

        const objTem = 
            {nombreCategoria: nombre,
            imagenCategoria : categoria
            }
        categorias.push(objTem)
    });
}