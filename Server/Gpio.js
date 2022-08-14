var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(13, 'out'); //use GPIO pin 4, and specify that it is output



export function writeGpio(status){
    if(status == true){
        LED.writeSync(1);
    } else{
        LED.writeSync(0);
    }
  
}