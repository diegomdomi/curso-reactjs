import React from 'react'
import './MensajeTable.css'

const MensajeTable = (props) => {
  return (
    <div>
    <table className="MensajesTable">
      <thead className="Header">
        <tr>
          <th>Asunto</th>
          <th>Email</th>
          <th>Nota</th>
          <th>Eliminar nota</th>
        </tr>
      </thead>
      <tbody>
        {props.mensajes.map(((mensaje, index) => 
          (<tr key={index}>
             <td>{mensaje.asunto}</td>
             <td>{mensaje.email}</td>
             <td>{mensaje.nota}</td>
             <td>
               <button className="Borrar" title="Borrar mensaje"
               onClick={() => {props.clickEliminarUno(index)}}>❌</button>
             </td>
          </tr>)
        ))}
      </tbody>
    </table>
    
    </div>
  )
}

export default MensajeTable