import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div
      className="Home page"
    >
      <h1>Welcome to Tactically Aquired Surplus</h1>

      <Link className="btn btn-primary" to="/catalog">
        Check out our catalog
      </Link>
    </div>
  );
}

export default Home;
