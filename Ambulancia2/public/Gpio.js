

// Funcion para escribir en los puertos GPIO

function gpioWrite(name,state){

    let dato = {
        "status": state,
        "name": name
};

    fetch("http://localhost:4000/outs",{
    method: "POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(dato)
 
})

}


 export{gpioWrite}
