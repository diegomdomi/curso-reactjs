import React from 'react';
import {useState} from 'react'

const BotonEstado =()=> {

    const [estado, setEstado] = useState(false)
    const cambiar=()=>{ 
        setEstado(!estado)
    }
    
    console.log(estado)
  return (
    <button onClick={cambiar}>
        ingresar
    </button>
  )
}
export default BotonEstado