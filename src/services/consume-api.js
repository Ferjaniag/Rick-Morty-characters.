import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

const fetchCharacters = async (query = "") => {
  try {
    const response = await axios.get(`${BASE_URL}/character`, {
      params: { name: query },
    });
    return response.data.results || [];
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};

export { fetchCharacters };
