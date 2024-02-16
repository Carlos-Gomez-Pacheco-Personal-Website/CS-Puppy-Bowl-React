// import { Link } from "react-router-dom";

// function NavBar() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/players/new">Add New Player</Link>
//         </li>
//         {/* Add more links as needed */}
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div id="navbar">
      <nav>
        <Link to="/">Puppy Bowl</Link>
        {/* Add more links as needed */}
      </nav>
    </div>
  );
}

export default NavBar;
