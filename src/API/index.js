const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2308-ac-pt-web-pt-a/";

export async function getPlayers() {
  try {
    const response = await fetch(`${API_URL}players`);
    if (!response.ok) {
      console.error("Error fetching players:", response.statusText);
      return [];
    }
    const data = await response.json();
    return data.data.players;
  } catch (error) {
    console.error("Error fetching players:", error);
    return [];
  }
}

export async function fetchPlayer(id) {
  try {
    const response = await fetch(`${API_URL}players/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching player with id ${id}:`, error);
    return null;
  }
}

export async function createPlayer(playerData) {
  try {
    const response = await fetch(`${API_URL}players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating player:", error);
    return null;
  }
}

export async function deletePlayer(id) {
  try {
    const response = await fetch(`${API_URL}players/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error deleting player with id ${id}:`, error);
    return null;
  }
}
