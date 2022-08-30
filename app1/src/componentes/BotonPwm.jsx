import React from 'react'
import './BotonPwm.css'
import {gpioPwm} from '../funciones/FuncionesGpio'

function Boton(params) {
  const botonToDo = (params)=>{
    gpioPwm(params.name)

  }
  return (
    
    <button onClick={()=>{botonToDo(params)}} className="btn" id={params.id} name={params.name}>{params.name}  <div className ="btn-status"></div></button>
  )
}

export default Boton;