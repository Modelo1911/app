import { useState } from "react";
import "./ShopList.css";

function ShopList() {
  const [list, setList] = useState(["test 1", "test 2", "test 3"]);
  const [text, setText] = useState("");
  function addItem() {
    console.log("adding...");
    /**
     * create a copy
     * modify your copy
     * set the copy
     */
    let copy = [...list];
    copy.push(text);
    setList(copy);
  }

  function handleTextChange(e) {
    const val = e.target.value;
    setText(val);
  }

  function deleteAll() {
    setList([]);
  }

  return (
    <div className="shop-list page">
      <h3>Shopping List!</h3>

      <div className="box">
        <input onChange={handleTextChange} type="text" />
        <button onClick={addItem} className="btn btn-sm btn-success">
          Add Here!
        </button>

        <button onClick={deleteAll} className="btn btn-sm btn-danger">
          Clear
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
