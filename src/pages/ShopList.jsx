import { useState } from "react";
import "./ShopList.css";

function ShopList() {
  const [list, setList] = useState(["test 1", "test 2", "test 3"]);
  function addItem() {
    console.log("adding...");
    /**
     * create a copy
     * modify your copy
     * set the copy
     */
    let copy = [...list];
    copy.push("NEW");
    setList(copy);
  }

  return (
    <div className="shop-list page">
      <h3>Shopping List!</h3>
      <div className="box">
        <input type="text" />
        <button onClick={addItem} className="btn-btn-outline-dark">
          Add Here!
        </button>
      </div>
      <div>
        <ul>
          {list.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShopList;
