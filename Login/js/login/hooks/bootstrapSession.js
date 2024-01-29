(() =>{

    //obtenemos la sesion del ususario del lodval storager
    const isAuthenticated = localStorage.getItem("isAuthenticated")

    //obtengo la ruta donde el usuario quiere acceder
    const path = window.location.pathname
    //corto el path para acceder solamente al archivo que esta intentando acceder el usuario
    
    const routeActu = path.substring(path.lastIndexOf("/")+1)
    // creo una lista con todos los nombres de los archivos
    const privateRoutes= ["administrador.html"]

    console.log(routeActu);
    if(privateRoutes.includes(routeActu) && !isAuthenticated){
        alert("no tienes permiso");
        window.location.href = "index.html"
    }
    
    }

)()