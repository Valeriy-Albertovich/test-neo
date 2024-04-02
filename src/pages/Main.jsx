import React, { Component } from 'react'
import { products } from '../data/products'
import { Product } from '../components/Products'

export class Main extends Component {
  render() {
    return (
      <div style={{flex: '1 1 auto'}}>

        <div 
        style={{width: '50vw'}}
          className='container d-flex justify-content-start flex-wrap pt-5'
        >
          <p class="fs-6 opacity-75">Проводные наушники</p>
        </div>

        <div 
        style={{width: '50vw'}}
          className='container d-flex justify-content-start flex-wrap'
        >
          {
            products.map(product => {
              if (product.category === 'wired headphones') {
                return <Product product={product} key={product.id}/>
              }
            })
          }
        </div>
  
        <div 
        style={{width: '50vw'}}
          className='container d-flex justify-content-start flex-wrap pt-5'
        >
          <p class="fs-6 opacity-75">Беспроводные наушники</p>
        </div>

        <div 
        style={{width: '50vw'}}
          className='container d-flex justify-content-start flex-wrap'
        >
          {
            products.map(product => {
              if (product.category === 'wireless headphones') {
                return <Product product={product} key={product.id}/>
              }
            })
          }
        </div>
      </div>
    )
  }
}

export default Main;