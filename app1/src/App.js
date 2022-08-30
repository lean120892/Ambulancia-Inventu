import React from 'react'
import './App.css';
import BotoneraPrincipal from './componentes/BotoneraPrincipal';
import Semaforo from './componentes/Semaforo';

function App() {
  return (
    <div className='body'>
    <BotoneraPrincipal></BotoneraPrincipal>
    <Semaforo></Semaforo>
    </div>
  );
}

export default App;
