import DataContext from "../Context/dataContext";
import { useContext } from "react";
import "./Cart.css";
import constants from "../common/config";

function Cart() {
  const cart = useContext(DataContext).cart;

  console.log(cart);

  function getNumProducts() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.quantity; // quantity times price
    }

    return total;
  }

  function getTotal(){
    let total = 0;
    for (let i = 0; i < cart.length; i++){
      let prod = cart[i];
      total += prod.quantity * prod.price;
    }
  
  return total.toFixed(2);
  }
  

  return (
    <div className="cart page">
      <h1>Your Cart</h1>
      <h6>We have {getNumProducts} ready for you</h6>

      <div className="parent">
        <div className="list">
          {cart.map((prod) => (
            <div className="prod-cart">
              <img src={constants.IMAGE_PATH + prod.image} alt="" />

              <div>
                <h5>{prod.title}</h5>
                <label>{prod.category}</label>
              </div>

              <label>${prod.price}</label>
              <label>{prod.quantity}</label>
              <label>${prod.quantity * prod.price}</label>
              <button className="btn btn-sm btn-danger">Delete</button>
            </div>
          ))}
        </div>

        <div className='total'>
          <h3>Total</h3>
          <h4>${getTotal() }</h4>
        </div>
      </div>
    </div>
  );
}

export default Cart;
