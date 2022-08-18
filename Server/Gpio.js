
/* ---Configuracion de pines GPIO --- */

/* ---Configuracion de pines GPIO --- */

/* --- Salidas ---*/

const pinExtractor = 17;
const pinCalefaccion = 27;
const pinLuzInt1 = 22;
const pinLuzInt2 = 5;
const pinLuzQuirofano = 6;
const pinLuzExterior = 26;


var Gpio = require('onoff').Gpio;
    let Extractor 
    let Calefaccion 
    let LuzInt1 
    let LuzInt2 
    let LuzQuirofano 
    let LuzExterior

exports.IniciarGpio = ()=>{
     Extractor = new Gpio(pinExtractor,'out');
     Calefaccion = new Gpio(pinCalefaccion,'out');
     LuzInt1 = new Gpio(pinLuzInt1,'out');
     LuzInt2 = new Gpio(pinLuzInt2,'out');
     LuzQuirofano = new Gpio(pinLuzQuirofano,'out');
     LuzExterior = new Gpio(pinLuzExterior,'out');
    
    console.log("Se iniciaron los GPIO")
}

exports.PinWrite = (pin)=>{
  
  switch (pin){
      case 'Extractor':
      Extractor.writeSync(Extractor.readSync()^1);
      break;
      case 'Calefaccion':
      Calefaccion.writeSync(Calefaccion.readSync()^1);
      break;
      case 'LuzInt1':
      LuzInt1.writeSync(LuzInt1.readSync()^1);
      break;
      case 'LuzInt2':
      LuzInt2.writeSync(LuzInt2.readSync()^1);
      break;
      case 'LuzQuirofano':
      LuzQuirofano.writeSync(LuzQuirofano.readSync()^1);
      break;
      case 'LuzExterior':
      LuzExterior.writeSync(LuzExterior.readSync()^1);
      break;
  }
}