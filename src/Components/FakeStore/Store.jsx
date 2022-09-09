import React from 'react'
import { Link } from 'react-router-dom'
import './store.css'

const Store = ({id,title,price,description,rating,img,category}) => {

  let abrirProducto = () => {
 
    return {
      pathname: '/product/' + id,
      state: { 
          id,
          img,
          description,
          title,
          price,
          category
      }
    }  
  }
  return (
    <>

   
<div className="col s12 m3">
      <div className="card">
        <div className="card medium">
        <Link to={abrirProducto}>
        <div className="card-image">
          <img src={img} alt={description} />
        </div>
        </Link>
        <div className="card-content">
          <span className="card-title">{title}</span>
          <p>u$s {price}</p>
          <p>ratin {rating}</p>
        </div>
      </div>
      </div>
    </div>
  </>
  )
}

export default Store





