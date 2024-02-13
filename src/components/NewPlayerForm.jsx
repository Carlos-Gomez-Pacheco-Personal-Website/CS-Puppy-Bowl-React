import { useState } from "react";
import { createPlayer } from "../API";

function NewPlayerForm() {
  const [playerData, setPlayerData] = useState({
    name: "",
    // Add other player fields here
  });

  const handleChange = (event) => {
    setPlayerData({
      ...playerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createPlayer(playerData);
    // Redirect to home page after creation
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={playerData.name}
          onChange={handleChange}
        />
      </label>
      {/* Add other player fields here */}
      <button type="submit">Create Player</button>
    </form>
  );
}

export default NewPlayerForm;
