import React, {  useState } from 'react';
import './MensajeHeader.css'
// import StateUser from '../StateUser';

const  MensajeHeader = (props) => {
    console.log(props.params.pathname);
    const [asunto, setAsunto] = useState('');
    const [email, setEmail] = useState('');
    const [nota, setNota] = useState('');

    const [validacionAsunto , setValidacionAsunto] = useState(false);
    const [validacionEmail , setValidacionEmail] = useState(false);
    const [validacionNota , setValidacionNota] = useState(false);

    

    let manejarCambios = (event) => {
        if(event.target.name === "asunto"){
            comprobarAsunto (event.target.value.trim())
            setAsunto(event.target.value)
        }
        if(event.target.name === "email"){
            comprobarEmail (event.target.value)
            setEmail(event.target.value)
        }
        if(event.target.name === "nota"){
            comprobarNota (event.target.value)
            setNota(event.target.value.trim())
        }   
    }

    const comprobarAsunto = (value) => {
        if( value  && value.length >= 2 ){
            setValidacionAsunto(true)
        }else{
            setValidacionAsunto(false)
      }
    }

    
    
    const  filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const comprobarEmail = (value) => {
        if(filter.test(value)){
            setValidacionEmail(true)
        }else{
            setValidacionEmail(false)
        }
    }

    const comprobarNota = (value) => {
        if(value.length >= 10){
            setValidacionNota(true)
        }else{
            setValidacionNota(false)
        }
    }

    const enviarForm=(e)=>{
        e.preventDefault()
        e.target.reset()
        setValidacionAsunto(false)
        setValidacionEmail(false)
        setValidacionNota(false)
        setAsunto("")
        setEmail("")
        setNota("")
        
        console.log("se envió form")
    }

    return (
    <div>
    <h1>Agregar Notas Rápidas</h1>
    <h4>{props.params.state.online ? "Online User" : "Offline User"}</h4>
    <form onSubmit={enviarForm}>
        <input className="Elemento" placeholder="asunto" type="text"
           name="asunto" onChange={manejarCambios}  required minlength="2"/>
        { !validacionAsunto && asunto.length >= 1 && <small style={{color:"red", fontSize:"12px"}}> debe tener al menos 2 caracteres</small>}

        <input className="Elemento" placeholder="email" type="email"
           name="email"  onChange={manejarCambios}  required/>
        { email.length >= 1 && !validacionEmail &&<small style={{color:"red", fontSize:"12px"}}>se espera un mail</small>}

        <input className="Elemento" placeholder="nota" type="text"
           name="nota"  onChange={manejarCambios} 
           required minlength="10"/> 
        { nota.length > 0 && nota.length < 10 && <small style={{color:"red",fontSize:"12px"}}>la nota debe tener mas de 10 caracteres</small>}

        <button disabled={!(validacionAsunto && validacionEmail && validacionNota)} onClick={()=>props.clickNuevo({asunto , email , nota })} className="Nuevo">
            Agregar Nota</button> 
        <button onClick={props.clickEliminar} className="Vaciar">Vaciar</button> 
    </form>
    </div>
  )
}

export default MensajeHeader


