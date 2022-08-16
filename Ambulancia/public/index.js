import{gpioWrite} from './Gpio.js'


function BtnOnOff (btn){
    console.log(btn.name)
    
}
/* ---Botonera--- */

const Extractor = document.getElementById('btn-extractor');
        Extractor.addEventListener('click',(e)=>{BtnOnOff(e.target)});
const Calefaccion = document.getElementById('btn-calefaccion');
        Calefaccion.addEventListener('click',(e)=>{BtnOnOff(e.target)});
const LuzInt1 = document.getElementById('btn-luzInt1');
        LuzInt1.addEventListener('click',(e)=>{BtnOnOff(e.target)});
const LuzInt2 = document.getElementById('btn-luzInt2');
        LuzInt2.addEventListener('click',(e)=>{BtnOnOff(e.target)});
const LuzQuirofano = document.getElementById('btn-luzQuirofano');
        LuzQuirofano.addEventListener('click',(e)=>{BtnOnOff(e.target)});
const LuzExterior = document.getElementById('btn-luzExterior');
        LuzExterior.addEventListener('click',(e)=>{BtnOnOff(e.target)});

