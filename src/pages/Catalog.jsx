import "./Catalog.css";
import Product from "../components/Product";

function Catalog() {
  const data = [
    {
      title: "Armasight PVS-14",
      price: 2999,
      category: "Night vision",
      image: "pvs-14.jpg",
      _id: 1,
    },

    {
      title: "Armasight BNVD-40",
      price: 7000,
      category: "Night vision",
      image: "bnvd-40.jpg",
      _id: 2,
    },

    {
      title: "Blue Force Rifle Sling",
      price: 59.99,
      category: "Parts",
      image: "sling.jpg",
      _id: 3,
    },

    {
      title: "Trijicon ACOG",
      price: 1300,
      category: "Optic",
      image: "acog.jpg",
      _id: 4,
    },

    {
      title: "Duramag Steel Magazine",
      price: 14.99,
      category: "Parts",
      image: "mag.jpg",
      _id: 5,
    },

    {
      title: "Magpul Pmag (Tan Only)",
      price: 15.99,
      category: "Parts",
      image: "pmag.jpg",
      _id: 6,
    },

    {
      title: "Duel Magazine Pouch",
      price: 12.99,
      category: "Parts",
      image: "mag pouch.jpg",
      _id: 7,
    },
  ];

  return (
    <div className="catalog page">
      <h1>Our Catalog!</h1>
      <h6>For sale only inside the continentel United States</h6>

      {data.map((prod) => (
        <Product key={prod._id} info={prod} />
      ))}
    </div>
  );
}

export default Catalog;
