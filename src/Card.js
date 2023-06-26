import './App.css';

const Card = (props) =>{
  let i = props.shoes.i
  console.log(i)
    return (
      <div className="col-md-4">

        <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} width="100%"/>

        <h4>{props.shoes.title}</h4>

        <p>{props.shoes.content} & {props.shoes.price}</p>

      </div>
    )
  }
  export default Card;