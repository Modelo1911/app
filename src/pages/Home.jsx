import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div style={{backgroundImage: "url(/night-vision.png)" }} className="Home page">
      <h1>Welcome to Tactically Aquired</h1>

      <Link className="btn btn-primary" to="/catalog">
        Check out our catalog
      </Link>

      
    </div>
  );
}

export default Home;
