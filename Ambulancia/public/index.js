import{gpioWrite} from './Gpio.js'


function BtnOnOff (btn){
        
        gpioWrite(btn.name)
                .then(res=> res.json())
                .then(data=> ActualizarEstadoBoton (btn.id, data.state))
        
    
}

function ActualizarEstadoBoton (idBoton, info) {
        
        let boton = document.getElementById(idBoton)
       
        if (info == "1"){
                boton.lastChild.classList.add('btn-status-on')
        }else{
                boton.lastChild.classList.remove('btn-status-on')
        }
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

   //Extractor.div.classList.add ('btn-status-on');
  // console.log(Extractor.lastChild.classList.add('btn-status-on'))