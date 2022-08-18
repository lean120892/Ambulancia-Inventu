
/* ---Configuracion de pines GPIO --- */

/* --- Salidas ---*/

const pinExtractor = 17;
const pinCalefaccion = 27;
const pinLuzInt1 = 22;
const pinLuzInt2 = 5;
const pinLuzQuirofano = 6;
const pinLuzExterior = 26;


var Gpio = require('onoff').Gpio;

exports.IniciarGpio = ()=>{
    let Extractor = new Gpio(pinExtractor,'out');
    let Calefaccion = new Gpio(pinCalefaccion,'out');
    let LuzInt1 = new Gpio(pinLuzInt1,'out');
    let LuzInt2 = new Gpio(pinLuzInt2,'out');
    let LuzQuirofano = new Gpio(pinLuzQuirofano,'out');
    let LuzExterior = new Gpio(pinLuzExterior,'out');
    
    console.log("Se iniciaron los GPIO")
}

exports.PinWrite = (pin)=>{
    pin.writeSync(pin.readSync() ^ 1);
}