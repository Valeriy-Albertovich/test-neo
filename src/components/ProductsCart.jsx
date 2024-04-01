import { Button, Image } from "react-bootstrap";

export function Product(props) {
  return(
    <div 
      style={{ width: '15rem', height: '17rem', backgroundColor: 'white'}} 
      className="container border rounded-5 px-3 py-3 shadow my-3 mx-3"
    >
      <Image 
        style={{ width: '10em', height: '10em'}} 
        src={props.product.image} rounded 
        alt={props.product.description}
      />
      <div className="d-flex justify-content-between">
        <span>{props.product.title}</span>
        <span>{props.product.price} &#8381;</span>
      </div>
      <div className="d-flex justify-content-between">
        <span>&#11088; {props.product.rating}</span>
        <Button variant="outline-dark">Купить</Button>
      </div>
    </div>
  )
}