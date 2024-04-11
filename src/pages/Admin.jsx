import { useState } from "react";
import "./Admin.css";
import DataService from "./../services/dataService";

function Admin() {
  const [coupon, setCoupon] = useState({
    code: "",
    discount: "",
  });
  const [allCoupons, setAllCoupons] = useState([]);

  function handleCouponChange(e) {
    const val = e.target.value;
    const name = e.target.name;

    var copy = { ...coupon };
    copy[name] = val;
    setCoupon(copy);
  }

  function saveCoupon() {
    console.log(coupon);

    let copy = [...allCoupons];
    copy.push(coupon);
    setAllCoupons(copy);
  }
  /** */

  const [product, setProduct] = useState({
    title: "",
    catagory: "",
    image: "",
    price: "",
  });
  const [allProducts, setAllProducts] = useState([]);

  function handleProductChange(e) {
    const val = e.target.value;
    const name = e.target.name;
    var copy = { ...product };
    copy[name] = val;
    setProduct(copy);
  }

  function saveProduct() {
    console.log(product);
    product.price = parseFloat(product.price);

    var copy = [...allProducts];
    copy.push(product);
    setAllProducts(copy);

    let service = new DataService();
    service.saveProduct(product);
  }
  return (
    <div className="parent">
      <h1>Store Administration</h1>
      <div className="prods">
        <div className="col-sm-4">
          <h3>Products</h3>
          <div className="form-group">
            <label className="form-label">Title</label>
            <input
              name="title"
              type="text"
              className="form-control"
              onChange={handleProductChange}
            />
          </div>
          <div>
            <label className="form-label">Category</label>
            <input
              name="category"
              type="text"
              className="form-control"
              onChange={handleProductChange}
            />
          </div>
          <div>
            <label className="form-label">Image</label>
            <input
              name="image"
              type="text"
              className="form-control"
              onChange={handleProductChange}
            />
          </div>
          <div>
            <label className="form-label">Price</label>
            <input
              name="price"
              type="number"
              className="form-control"
              onChange={handleProductChange}
            />
          </div>
          <div className="form-group">
            <button onClick={saveProduct} className="btn btn-primary">
              Save Products
            </button>
          </div>
          <ul>
            {allProducts.map((p, index) => (
              <li key={index}>
                {p.title} - {p.category} - ${p.price}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-sm-3">
          <h3>Coupons</h3>
          <div className="form-group">
            <label className="form-label">Code</label>
            <input
              name="code"
              type="text"
              className="form-control"
              onChange={handleCouponChange}
            />
          </div>
          <div className="col-sm-12">
            <label className="form-label">Discount</label>
            <input
              name="discount"
              type="number"
              className="form-control"
              onChange={handleCouponChange}
            />
          </div>
          <div className="form-group">
            <button onClick={saveCoupon} className="btn btn-primary">
              Save Coupon
            </button>
          </div>
          <ul>
            {allCoupons.map((c, index) => (
              <li key={index}>
                {c.code} - ${c.discount}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Admin;
