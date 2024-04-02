import { useState } from "react";
import "./QuantityPicker.css";

function QuantityPicker(props) {
  const [quantity, setQuantity] = useState(1);

  function increase() {
    let newVal = quantity + 1;
    setQuantity(newVal);
    props.onChange(newVal);
  }

  function decrease() {
    let newVal = quantity - 1;
    if (newVal > 0) {
      setQuantity(newVal);
      props.onChange(newVal);
    }
  }

  return (
    <div className="pt-picker">
      <button disables={quantity === 1} onClick={decrease}>
        -
      </button>
      <label>{quantity}</label>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default QuantityPicker;
