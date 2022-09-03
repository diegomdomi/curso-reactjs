import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { borrarMensaje, crearMensaje, leerMensaje, vaciarMensajes } from '../redux/actions/index'
import MensajeHeader from './MensajeHeader/MensajeHeader'
import MensajeTable from './MensajeTable/MensajeTable'
import { useLocation } from 'react-router-dom';

const  Mensajes =()=> {
  const location = useLocation()
  console.log(location)

    // const[mensajes,setMensajes] = useState([])
    const mensajes = useSelector(state=>state.mensajes);
    const dispatch = useDispatch();

    let crear = ({asunto, email, mensaje}) => {
      let nuevo = {
        "asunto": asunto,
        "email": email,
        "mensaje": mensaje,
        "leido": false
      };
   
      dispatch(crearMensaje(nuevo));
    }
    let vaciar = () => { dispatch(vaciarMensajes()); }
    let eliminar = (index) => { dispatch(borrarMensaje(index)); }
    let leer = (index) => { dispatch(leerMensaje(index)) }

    // setMensajes(mensajes => [...mensajes, nuevo]);
  ;

  	
  // let eliminarNotas = () => {
  //   setMensajes([]);
  // };
  
  // let eliminarMensaje = (index) => {
  //   mensajes.splice(index, 1);
  //   setMensajes([...mensajes]);
  // };

   return (
    <div className="Mensajes">
        <MensajeHeader clickNuevo={crear} 
                       clickEliminar={vaciar}
                       params={location}
                       >
        </MensajeHeader>
        <MensajeTable mensajes={mensajes} 
                      clickEliminarUno={eliminar} 
                      clickMarcarLeido={leer}
                      >
        </MensajeTable>
    </div>
  )
}


export default Mensajes