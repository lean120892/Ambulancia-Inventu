const  gpioWrite = async (name,state)=>{
 
    let dato = {
        "status": state,
        "name": name
};

   return fetch("http://localhost:4000/outs",{
    method: "POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(dato)
 
})

}


 export{gpioWrite}
