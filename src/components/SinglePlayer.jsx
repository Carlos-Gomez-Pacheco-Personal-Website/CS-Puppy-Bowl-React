// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { fetchPlayer, deletePlayer } from "../API";

// function SinglePlayer() {
//   const { id } = useParams();
//   const [player, setPlayer] = useState(null);

//   useEffect(() => {
//     async function getPlayer() {
//       const playerData = await fetchPlayer(id);
//       setPlayer(playerData);
//     }

//     getPlayer();
//   }, [id]);

//   const handleDelete = async () => {
//     await deletePlayer(id);
//     // Redirect to home page after deletion
//   };

//   return player ? (
//     <div>
//       <h4>{player.name}</h4>
//       {/* Display other player details here */}
//       <button onClick={handleDelete}>Delete Player</button>
//     </div>
//   ) : (
//     <div>Loading...</div>
//   );
// }

// export default SinglePlayer;

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
      {/* Render other player details */}
    </div>
  );
}

export default SinglePlayer;
