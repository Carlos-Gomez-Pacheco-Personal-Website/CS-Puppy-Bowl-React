import { useEffect, useState } from "react";
import { getPlayers, deletePlayer } from "../API";
import { Link } from "react-router-dom";

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [expandedPlayerId, setExpandedPlayerId] = useState(null);

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

  const handleToggleDetails = (id) => {
    setExpandedPlayerId(expandedPlayerId === id ? null : id);
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
              onClick={() => handleToggleDetails(player.id)}
              className="details-button"
            >
              {expandedPlayerId === player.id ? "Hide Details" : "Show Details"}
            </button>
            {expandedPlayerId === player.id && (
              <div className="player-details">
                <p>Status: {player.status}</p>
                <p>ID: {player.id}</p>
                <p>Team: {player.team}</p>
                <p>Cohort ID: {player.cohortId}</p>
              </div>
            )}
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
