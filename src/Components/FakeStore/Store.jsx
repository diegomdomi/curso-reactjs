import React, {useState} from 'react'
import './store.css'
import Product from './Product'

const Store = ({products}) => {

console.log("soy Store");
const [currency, setcurrency] = useState(false)

const cambiar=()=>{
  setcurrency(!currency)
}
console.log(currency)

  return (
   <>
    <button  onClick={cambiar}>{currency ? "u$s" : "€"}</button>
    <div className="container">
      <div className="row">
       {products.map((item, index) => {
          return( <Product  title={item.title}
                            price= {item.price}       
                            description={item.description}
                            rating={item.rating.rate}
                            img={item.image}
                            category={item.category}
                            id={item.id}
                            key={index}/>
             )
        })}
      </div>
    </div> 
    </>

  )
}


export default Store





