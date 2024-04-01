import React from 'react'
import { products } from '../data/products'
import { Product } from '../components/ProductsCart'
import useCart from '../hooks/storage';



export default function ShoppingCart() {

  const { cart } = useCart()

  return (
    <div 
        style={{width: '50vw'}}
          className='container d-flex justify-content-start flex-wrap'
        >
          {     
            cart.forEach((key) => {
              let x = products.find(product => product.id === key)
              return <a>product={x} key={x.id}</a>
            })
          }
        </div>
  )
}
