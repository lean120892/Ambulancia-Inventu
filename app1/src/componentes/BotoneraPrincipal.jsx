import React from 'react'
import Boton from './Boton.jsx';
import './BotoneraPrincipal.css'

const BotoneraPrincipal = () => {
  return (
   <div className='botonera'>
    <Boton id="btn-extractor" name="Extractor"></Boton>
    <Boton id="btn-calefaccion" name="Calefaccion"></Boton>
    <Boton id="btn-luzInt1" name="LuzInt1"></Boton>
    <Boton id="btn-luzInt2" name="LuzInt2"></Boton>
    <Boton id="btn-luzQuirofano" name="LuzQuirofano"></Boton>
    <Boton id="btn-luzExterior" name="LuzExterior"></Boton>
   </div>
  )
}

export default BotoneraPrincipal;