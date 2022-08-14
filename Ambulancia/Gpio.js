

// Funcion para escribir en los puertos GPIO

function gpioWrite(state){

    let dato = {"status": state};

    fetch("http://localhost:4000/outs",{
    method: "POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(dato)
 
})

}
 export{gpioWrite}
//gpioWrite(false);