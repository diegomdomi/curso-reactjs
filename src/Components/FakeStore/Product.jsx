import React from 'react'
import { useLocation } from 'react-router-dom'
import './store.css'

const Product = (products) => {

 let location  = useLocation()
  const {id,img,description,title,price,category} = location.state


  return (
    
  <div className="row product">
    <div className="col s12 m7">
      <h5 className="category">{category}</h5>
      <h4 className="header">{title}</h4>
      <div className="card horizontal">
        <div className="card-image">
          <img src={img} style={{maxWidth:"250px"}} alt={{description}}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{description}</p>
          </div>
          <div className="product-price"> 
          <strong>u$s {price}</strong> 
          </div>
          <div className="card-action">
            <a >Add to cart</a>
          </div>
        </div>
      </div>
      </div>
  </div>
  )
}


export default Product