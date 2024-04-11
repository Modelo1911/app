import "./Catalog.css";
import Product from "../components/Product";
import DataService from "../services/dataService";
import { useEffect, useState } from "react";

function Catalog() {
  const [data, setData] = useState([]);

  async function loadCatalog() {
    let service = new DataService();
    let cat = await service.getCatalog();
    setData(cat);
  }

  useEffect(function () {
    loadCatalog();
  }, []);

  return (
    <div className="catalog page">
      <h1>Our Catalog!</h1>
      <h3>For sale only inside the continentel United States</h3>
      <h6>
        All products listed below are ethically obtained and/or willingly
        donated for resale{" "}
      </h6>

      {data.map((prod) => (
        <Product key={prod._id} info={prod} />
      ))}
    </div>
  );
}

export default Catalog;
