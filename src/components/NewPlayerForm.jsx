// import { useState } from "react";
// import { createPlayer } from "../API";

// function NewPlayerForm() {
//   const [playerData, setPlayerData] = useState({
//     name: "",
//     // Add other player fields here
//   });

//   const handleChange = (event) => {
//     setPlayerData({
//       ...playerData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     await createPlayer(playerData);
//     // Redirect to home page after creation
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           name="name"
//           value={playerData.name}
//           onChange={handleChange}
//         />
//       </label>
//       {/* Add other player fields here */}
//       <button type="submit">Create Player</button>
//     </form>
//   );
// }

// export default NewPlayerForm;

import { useState } from "react";
import { createPlayer } from "../API";
import { Link } from "react-router-dom";
import "./NewPlayerForm.css";

function NewPlayerForm() {
  const [playerData, setPlayerData] = useState({
    name: "",
    breed: "",
    status: "",
    imageUrl: "",
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
    alert("Player has been created");
  };

  return (
    <form onSubmit={handleSubmit} className="player-form">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={playerData.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Breed:
        <input
          type="text"
          name="breed"
          value={playerData.breed}
          onChange={handleChange}
        />
      </label>
      <label>
        Status:
        <select
          id="status"
          name="status"
          value={playerData.status}
          onChange={handleChange}
        >
          <option value="field">field</option>
          <option value="bench">bench</option>
        </select>
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="imageUrl"
          value={playerData.imageUrl}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Submit" className="submit-button" />
      <Link to="/" className="go-back-link">
        Go Back
      </Link>
    </form>
  );
}

export default NewPlayerForm;
