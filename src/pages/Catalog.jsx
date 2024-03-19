import "./Catalog.css";
import Product from "../components/Product";

function Catalog() {
  const data = [
    {
      title: "Aloe Vera",
      price: 2.99,
      category: "Plant",
      image: "Aloe plant.jpg",
      _id: 1,
    },

    {
      title: "Sage",
      price: 1.99,
      category: "Herb",
      image: "sage.jpg",
      _id: 2,
    },

    {
      title: "Pepper",
      price: 4.99,
      category: "Plant",
      image: "red pepper plant.jpg",
      _id: 3,
    },

    {
      title: "Thyme",
      price: 0.99,
      category: "Herb",
      image: "thyme.jpg",
      _id: 4,
    },

    {
      title: "Cilantro",
      price: 0.89,
      category: "Herb",
      image: "cilantro.jpg",
      _id: 5,
    },

    {
      title: "Tomato",
      price: 2.99,
      category: "Fruit",
      image: "tomato.jpg",
      _id: 6,
    },

    {
      title: "Elderberry",
      price: 4.99,
      category: "Fruit",
      image: "elderberry.jpg",
      _id: 7,
    },
  ];

  return (
    <div className="catalog page">
      <h1>Our Catalog!</h1>

      {data.map(prod => <Product  key={prod._id}info={prod} />)}
    </div>
  );
}

export default Catalog;
