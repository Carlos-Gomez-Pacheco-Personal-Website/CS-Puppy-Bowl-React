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
import { getPlayers, deletePlayer } from "../API";
import { Link } from "react-router-dom";

function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      const playersData = await getPlayers();
      setPlayers(playersData);
    }

    fetchPlayers();
  }, []);

  const handleDelete = async (id) => {
    await deletePlayer(id);
    setPlayers(players.filter((player) => player.id !== id));
  };

  return (
    <div className="player-container">
      <Link to="/players/new" className="create-button">
        Create Player
      </Link>
      <div className="player-cards">
        {players.map((player) => (
          <div key={player.id} className="player-card">
            <img
              src={player.imageUrl}
              alt={player.name}
              className="player-image"
            />
            <h2 className="player-name">{player.name}</h2>
            <p className="player-breed">{player.breed}</p>
            <button
              onClick={() => handleDelete(player.id)}
              className="delete-button"
            >
              Delete Player
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPlayers;
