import "./Catalog.css";
import Product from "../components/Product";

function Catalog() {
  
  const data = [
    {
      title: "Aloe",
      price: 2.99,
      category: "Plant",
      image: "img1.jpg",
      _id: "1"
    },

    {
      title: "Sage",
      price: 1.99,
      category: "Plant",
      image: "img2.jpg",
      _id: "2"
    },

    {
      title: "Pepper",
      price: 4.99,
      category: "Plant",
      image: "img3.jpg",
      _id: "3"
    },
  ]

  return (
    <div className="catalog page">
      <h1>Our Catalog!</h1>

      <Product info={data[0]} />
      <Product info={data[1]}/>
      <Product info={data[2]} />
    </div>
  );
}

export default Catalog;
