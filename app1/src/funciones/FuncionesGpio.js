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

const gpioPwm = async(name, value) =>{

    let dato ={
        "name" : name,
        "value": value
    }
    return fetch("http://localhost:4000/pwm",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dato)
     
    })
}


 export{gpioWrite, gpioPwm}
