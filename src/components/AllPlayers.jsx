// // src/components/AllPlayers.jsx
// import { useState, useEffect } from "react";
// import { fetchPlayers } from "../API";
// import { Link } from "react-router-dom";

// function AllPlayers() {
//   const [players, setPlayers] = useState([]);

//   useEffect(() => {
//     async function getPlayers() {
//       const playersData = await fetchPlayers();
//       setPlayers(playersData);
//     }

//     getPlayers();
//   }, []);

//   return (
//     <div>
//       {players.map((player) => (
//         <div key={player.id}>
//           <h4>{player.name}</h4>
//           {/* Display other player details here */}
//           <Link to={`/players/${player.id}`}>See Details</Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default AllPlayers;
import { useEffect, useState } from "react";
import { getPlayers } from "../API";

function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      const playersData = await getPlayers();
      setPlayers(playersData);
    }

    fetchPlayers();
  }, []);

  return (
    <div>
      {players.map((player) => (
        <div key={player.id}>
          <h2>{player.name}</h2>
          <p>Breed: {player.breed}</p>
          {/* Render other player details */}
        </div>
      ))}
    </div>
  );
}

export default AllPlayers;
