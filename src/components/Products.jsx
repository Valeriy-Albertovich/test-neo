import { Button, Image } from "react-bootstrap";
import useCart from '../hooks/storage';
import { addToCart } from '../data/cart'

export function Product(props) {

  // const { cart } = useCart() //вынести в отдельный файл
  // console.log(cart);

  // const addToCart = (newId) => {

  //   let isNewStuff = true

  //   for (let id of cart.keys()) {
  //     if (newId == id) {
  //       isNewStuff = false
  //     }
  //   }

  //   if (isNewStuff) {
  //     useCart.setState((prev) => ({
  //       cart: new Map(prev.cart).set(newId, 1)
  //     }))
  //   } else {
  //     useCart.setState((prev) => ({
  //       cart: new Map(prev.cart).set(newId, prev.cart.get(newId) + 1)
  //     }))     
  //   }
  // }


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
        <Button variant="outline-secondary" class="border-0" onClick={() => addToCart(props.product.id)}>Купить</Button>
      </div>
    </div>
  )
}


export default Product;