import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import constants from '../common/config';

function Product(props) {
  function add() {
    console.log('adding prduct')
  }

  if (!props.info){
    return <div>Loading...</div>;
  }
  return (
    <div className="product">
      <img src={constants.IMAGE_PATH + props.info.image} alt="" />
      <h5>{props.info.title}</h5>
      <label>${props.info.price}</label>
      

      <QuantityPicker />

      <button onClick={add} className="btn btn-sm btn-outline-success">Add Here</button>
    </div>
  );
}

export default Product;
