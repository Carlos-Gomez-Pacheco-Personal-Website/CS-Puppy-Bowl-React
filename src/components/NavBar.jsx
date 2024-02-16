import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div id="navbar">
      <nav>
        <Link to="/" className="home-button">
          Puppy Bowl
        </Link>
        {/* Add more links as needed */}
      </nav>
    </div>
  );
}

export default NavBar;
