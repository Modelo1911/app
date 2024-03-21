import { useState } from "react";
import "./About.css";

function About() {
  const [contactVisible, setContactVisible] = useState(false);

  function showData() {
    console.log("button clicked");
    setContactVisible(!contactVisible);

  }


  return (
    <div className="about page">
      <h2>Guillermo Escobar</h2>

      {contactVisible ? <div className="info">
        <p>
          To get in touch with me please email me at{" "}
          <b>Guilleremo.escobar11@yahoo.com</b>
        </p>
      </div> : null}
      <button onClick={showData} className="btn btn-outline-dark">
        View info
      </button>
    </div>
  );
}

export default About;
