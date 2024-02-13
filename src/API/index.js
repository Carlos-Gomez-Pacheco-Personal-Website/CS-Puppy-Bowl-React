import axios from "axios";

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/";

export async function fetchPlayers() {
  try {
    const response = await axios.get(`${API_URL}players`);
    return response.data;
  } catch (error) {
    console.error("Error fetching players:", error);
    return [];
  }
}

export async function fetchPlayer(id) {
  try {
    const response = await axios.get(`${API_URL}players/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching player with id ${id}:`, error);
    return null;
  }
}

export async function createPlayer(playerData) {
  try {
    const response = await axios.post(`${API_URL}players`, playerData);
    return response.data;
  } catch (error) {
    console.error("Error creating player:", error);
    return null;
  }
}

export async function deletePlayer(id) {
  try {
    const response = await axios.delete(`${API_URL}players/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting player with id ${id}:`, error);
    return null;
  }
}
