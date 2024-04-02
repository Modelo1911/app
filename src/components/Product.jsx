import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import constants from "../common/config";
import { useState, useContext } from "react";
import DataContext from "../Context/dataContext";

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  let addProductToCart = useContext(DataContext).addProductToCart;

  function add() {
    let prod = {...props.info};
    prod.quantity = quantity;

    addProductToCart(prod);

    console.log(props.info);
    console.log(prod)
  }

  function quantityChange(qty) {
    setQuantity(qty);
  }

  function getTotal() {
    let total = props.info.price * quantity;
    return total.toFixed(2);
  }

  if (!props.info) {
    return <div>Loading...</div>;
  }
  return (
    <div className="product">
      <img src={constants.IMAGE_PATH + props.info.image} alt="main product" />
      <h5>{props.info.title}</h5>
      <label className="price">${props.info.price.toFixed(2)}</label>
      <label className="total">${getTotal()}</label>
      
      <div className='control'>
      <QuantityPicker onChange={quantityChange} />

      <button onClick={add} className="btn btn-info">
        Add Here
      </button>
      </div>
    </div>
  );
}

export default Product;
