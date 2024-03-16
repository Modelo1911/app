import "./Product.css";
function Product(props) {
    return (
        <div className="product">
            <img src="https://picsum.photos/200" />
            <h5>{props.info.title}</h5>
            <label>${props.info.price}</label>
        </div>
    );
}

export default Product;