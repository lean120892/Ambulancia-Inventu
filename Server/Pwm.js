// INstalar las dependecias npm install johnny-five raspi-io
const PWM0 = 'P1-32'; // Salida 32 Gpio 12
const PWM1 = 'P1-33'; // Salida 33 Gpio 13
const PWM2 = 'P1-35'; // Salida 35 Gpio 19
const PWM3 = 'P1-12'; // Salida 12 Gpio 18

exports.pwmOut = (pin, valor)=>{
    var five = require("johnny-five");
    var Raspi = require("raspi-io").RaspiIO;
    var board = new five.Board({
    io: new Raspi()
    });

    board.on("ready", function() {
        var led = new five.Led(pin);
        
        
        led.fade(valor, 1500);
    })
}

