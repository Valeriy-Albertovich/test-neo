import React from 'react'
import { products } from '../data/products'
import { ProductCart } from '../components/ProductCart'
import { getCart } from '../data/cart'
import { useStore } from "../hooks/storage";

export default function ShoppingCart() {
  const { price } = useStore()
  const cart = getCart()
  return (
    <div 
      style={{flex: '1 1 auto'}}
      className='d-flex justify-content-center'
    > 
      <div 
        className='container d-flex flex-column align-items-center pt-5'
        style={{width: '50%'}}
      >
        {
          cart.map(product => {
            return <ProductCart product={products[product.id-1]} count={product.count} key={product.id}/>
          })
        }
      </div>
      <div
        style={{width: '50%'}}
        className='d-flex justify-content-center my-5'
      >
        <div 
          style={{width: '25rem', height: '8rem', backgroundColor: 'white'}} 
          className="container border rounded-5 px-0 shadow my-3 mx-3 d-flex flex-column align-items-end justify-content-between"
        >
          <div 
            className="container d-flex align-items-center justify-content-between px-5 pt-3"
            style={{fontWeight: 'bold'}}
          >
            <span>ИТОГО</span>
            <span>{price} &#8381;</span>
          </div>

          <div 
          style={{width: '100%', height: '4rem', backgroundColor: 'black', opacity: '0.8'}} 
          className="container border rounded-5 d-flex align-items-center justify-content-center"
          >
            <span 
              style={{color: 'white'}}
            >
              Перейти к оформлению
            </span>
          </div>
          
        </div>
      </div>
    </div>
  )
}
