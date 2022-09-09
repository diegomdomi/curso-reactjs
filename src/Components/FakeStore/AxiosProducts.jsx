import React, {useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { listProducts } from "../../redux/actions/listProducts"
import {getProducts} from '../../services/axiosService'
import Store from './Store'
import Preloader from './Preloader'

const AxiosProducts = () => {

  const dispatch = useDispatch();
  const [products, setProducts] = useState([])

  useEffect(()=>{
    getProducts()
    .then((response)=> {
      setProducts(response.data);
      dispatch(listProducts(response.data))
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

   
  return (

    <>
    { products.length === 0 ? <Preloader/> :
    <div className="container"> 
        <div className="row">            

    {
      products.map((item,index)=>
      (
        <Store              title={item.title}
                            price= {item.price}       
                            description={item.description}
                            rating={item.rating.rate}
                            img={item.image}
                            category={item.category}
                            id={item.id}
                            key={index}
                            />
      )
      )
    }
      
      </div> 
      </div>
    }
      </> 
    )
}

export default AxiosProducts

