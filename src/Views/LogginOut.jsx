import React from 'react'
import{ logginUser } from '../redux/actions/logginAction'
import { useSelector,useDispatch } from 'react-redux'
import Mensajes from '../Components/Mensajes'

const LogginOut = () => {
    const ingresar = useSelector(state=>state.isLoggin);
    const dispatch = useDispatch();

   let cambiarEstado=()=>{dispatch(logginUser(!ingresar)) } 

  return (
    <>
    <div className="container_btn"
      style={{
        backgroundColor: ingresar ? "#FFCC33" : "#660066",
        padding: "50px",
        margin: "10px"
      }}>
        <button onClick={cambiarEstado} 
        style={
          { color: ingresar ? "green": "red" }}>
          { ingresar ? "iniciar sesión" :"cerrar sesión" }
        </button>
    </div>
    <div style={{
      backgroundColor:"#CCFFFF"
    }}>
      { ingresar ? <div></div> :<Mensajes/>}
    </div>
    </>
  )
}

export default LogginOut