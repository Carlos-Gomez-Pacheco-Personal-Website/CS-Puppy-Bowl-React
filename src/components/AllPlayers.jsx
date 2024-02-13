// src/components/AllPlayers.jsx
import { useState, useEffect } from "react";
import { fetchPlayers } from "../API";
import { Link } from "react-router-dom";

function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getPlayers() {
      const playersData = await fetchPlayers();
      setPlayers(playersData);
    }

    getPlayers();
  }, []);

  return (
    <div>
      {players.map((player) => (
        <div key={player.id}>
          <h4>{player.name}</h4>
          {/* Display other player details here */}
          <Link to={`/players/${player.id}`}>See Details</Link>
        </div>
      ))}
    </div>
  );
}

export default AllPlayers;
