import React, {useState, useRef } from 'react'

const ComponenteEventos = () => {
    	
    const nombreRef = useRef("")
    const [campo , setCampo] = useState()

    const manejarPulsacionesTeclado = (e) =>{
        const text = nombreRef.current.value
        setCampo(text)
    }

    const manejarDown = (e) =>{
        const text = nombreRef.current.value
        if (e.keyCode === 8){
            setCampo(text)
        }
          
    }
  return (
    <div>
        <input
            style={{margin:"20px",}}
            type="text"
            placeholder="Introduce tu nombre"
            onKeyPress={manejarPulsacionesTeclado}
            onKeyDown={manejarDown}
            ref = {nombreRef}
        >
        </input>
            <h3>{campo}</h3>

    </div>
  )
}

export default ComponenteEventos