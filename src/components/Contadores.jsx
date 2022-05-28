import React from 'react';
import { useState } from 'react';
import './Contadores.css'

function Contadores() {
  // estas son las variables que vamos a necesotar dentro del return
  const [counterHook, setCounterHook] = useState(0)  
  
  const click = () => {
    setCounterHook (counterHook + 1)
    if (counterHook >= 10) {
      setCounterHook(0)
    }
  }
  const click2 = () => {
     setCounterHook (counterHook - 1)
     if (counterHook <= 0) {
       setCounterHook(0)
     }
  }
  return (
  
  <div className="style">
     <h1>{counterHook}</h1>
     {/* para todas las acciones que necesitemos que react realice utilizamos onClick */}
     <button className='botonA' onClick={click}>Aumentar numero  </button> 
     <div>
        <button className='botonD' onClick={click2}> Restar un numero </button>
     </div>
    
  
    </div>
  );
  }

export default Contadores;