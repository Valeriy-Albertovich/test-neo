import { Button, Image } from "react-bootstrap";
import { addToCart } from '../data/cart'
import { useStore } from "../hooks/storage";

export function Product(props) {
  const { setCount } = useStore()

  return(
    <div 
      style={{ width: '15rem', height: '17rem', backgroundColor: 'white'}} 
      className="container border rounded-5 px-3 py-3 shadow my-3 mx-3"
    >
      <div className='d-flex justify-content-center'>
        <Image 
          style={{ width: '10em', height: '10em'}} 
          src={props.product.image} rounded 
          alt={props.product.description}
        />
      </div>
      <div className="d-flex justify-content-between">
        <span>{props.product.title}</span>
        <p class="text-warning">{props.product.price} &#8381;</p>

      </div>
      <div className="d-flex justify-content-between">
        <span>&#11088; {props.product.rating}</span>
        <Button variant="outline-secondary" class="border-0" onClick={() => {addToCart(props.product.id); setCount()}}>Купить</Button>
      </div>
    </div>
  )
}


export default Product;