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
    <nav>
      <Link to="/">All Players</Link>
      <Link to="/players/new">New Player</Link>
      {/* Add more links as needed */}
    </nav>
  );
}

export default NavBar;
