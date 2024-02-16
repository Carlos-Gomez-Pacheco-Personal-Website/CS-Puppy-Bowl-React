import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/white-terrier.png"; // Path to your logo

function NavBar() {
  return (
    <div id="navbar">
      <nav>
        <Link to="/" className="home-button">
          Puppy Bowl
          <img src={logo} alt="Logo" className="home-button-logo" />
        </Link>
        {/* Add more links as needed */}
      </nav>
    </div>
  );
}

export default NavBar;
