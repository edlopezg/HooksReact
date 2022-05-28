import React, { useState } from 'react'
import './Card.css'


const Card = ({name}) => {
const [inActive, setInActive] = useState('Activado')


const desactiveAction = () => {
     setInActive ('Desactivado')
}

const AactiveAction = () => {
    setInActive ('Activado')
}
  return (
    <article className='card'>
    <h2>{name}</h2>
    <p>Estado : {inActive}</p>
    <button className='botonD' onClick={desactiveAction}>DESACTIVAR</button>
    <button className='botonA' onClick={AactiveAction}>ACTIVAR</button>

    </article>
  )
}


export default Card;
