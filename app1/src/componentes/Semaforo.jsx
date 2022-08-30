import React from 'react'
import './Semaforo.css'
function Semaforo() {
  return (
    <div className='cuerpo-semaforo'>
        <div className='luz'>
            <div className='visera-semaforo '></div>
            <button className='lampara-semaforo luz-roja'></button>
        </div>
        <div className='luz'>
        <div className='visera-semaforo'></div>
        <button className='lampara-semaforo luz-amarilla'></button>
        </div>
        <div className='luz'>
        <div className='visera-semaforo'></div>
        <button className='lampara-semaforo luz-verde'></button>
        </div>

    </div>
  )
}

export default Semaforo