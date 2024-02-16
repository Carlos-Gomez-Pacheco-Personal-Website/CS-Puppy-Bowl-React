import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPlayer } from "../API";

function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function fetchSinglePlayer() {
      const playerData = await fetchPlayer(id);
      setPlayer(playerData);
    }

    fetchSinglePlayer();
  }, [id]);

  if (!player) return <div>Loading...</div>;

  return (
    <div>
      <h2>{player.name}</h2>
      <h2>{player.breed}</h2>
      {/* Render other player details from the API*/}
    </div>
  );
}

export default SinglePlayer;
