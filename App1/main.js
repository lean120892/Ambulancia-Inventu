


let betnLedState = false;
const btnLed = document.getElementById('btnled');
btnLed.addEventListener("click", ()=>{
    betnLedState = ! betnLedState;
    //gpioWrite(betnLedState);
})


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


gpioWrite(false);