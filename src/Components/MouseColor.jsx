import "../MouseColor.css"
import React, { useState,useRef } from 'react'


const MouseColor = () => {

  
  const divRef= useRef("red")
  
  const[color,setColor] = useState( "blue")
  const[inDiv2, setInDiv2] = useState(false)
  const[stopColor, setStopColor] = useState(false)
  

    const capturarRaton = (e) =>{
      e.preventDefault()
      if (inDiv2 === false && stopColor === false){
        let posittionX = e.clientX/2;
        let posittionY = e.clientY/2;
        let fondo = `rgb(${posittionX},${posittionY},100)`  
        setColor(fondo)
      }
      
    }
    
    const entradaDiv= (e)=>{
      e.preventDefault()
      divRef.current.style.backgroundColor="red"
      setInDiv2(true)
    }
      
    const salidaDiv =(e)=> {
      e.preventDefault()
      setInDiv2(false)
    }

    const doubleClicks = (e)=>{
      e.preventDefault()
      setStopColor(!stopColor)
    
    }
      

  return (
    <>
        <h1>Eventos de Mouse</h1>

        <div className="div1"
          onMouseMove={capturarRaton}
          style = {{backgroundColor : color}}
          ref={divRef}

        >
        <div className="div2"
          onMouseOver={entradaDiv}
          onMouseLeave={salidaDiv}
          onDoubleClick={doubleClicks}
        >
          <h5>Div2</h5> 
          <p>{stopColor ? "estoy true" : "estoy false"}</p>
        </div>  
        </div>  

    </> 
  )
}

export default MouseColor