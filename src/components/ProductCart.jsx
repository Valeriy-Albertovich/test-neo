import { Button, Image } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';

export function ProductCart(props) {

  return(
    <div 
      style={{ width: '25rem', height: '12rem', backgroundColor: 'white'}} 
      className="container border rounded-5 px-3 py-3 shadow my-3 mx-3 d-flex justify-content-between"
    >
      <div className=''>
        <Image 
          style={{ width: '7em', height: '7em'}} 
          src={props.product.image} rounded 
        />
        <div className="d-flex justify-content-between">
          <span><Icon.DashCircleFill/></span>
          <span>{props.count}</span>
          <span><Icon.PlusCircleFill/></span>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center">
        <span>{props.product.title}</span>
        <p class="text-warning">{props.product.price} &#8381;</p>

      </div>
      <div className="d-flex flex-column align-items-end justify-content-between">
        <a><Icon.Trash/></a>
        <span>{props.product.price * props.count} &#8381;</span>
      </div>
    </div>
  )
}


export default ProductCart;