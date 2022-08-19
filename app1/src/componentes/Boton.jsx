import React from 'react'
import './Boton.css'
import {gpioWrite} from '../funciones/FuncionesGpio'

function Boton(params) {
  const botonToDo = (params)=>{
    gpioWrite(params.name)

  }
  return (
    
    <button onClick={()=>{botonToDo(params)}} className="btn" id={params.id} name={params.name}>{params.name}  <div className ="btn-status"></div></button>
  )
}

export default Boton;