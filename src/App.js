import React, { useState, useEffect } from "react";
import { fetchCharacters } from "./services/consume-api";
import SearchBar from "./components/searchBar";
import CharacterCard from "./components/card";
import { Row, Col } from "antd";
import "./index.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAndSetCharacters = async (query = "") => {
    setLoading(true);
    const data = await fetchCharacters(query);
    setCharacters(data.slice(0, 10)); 
    setLoading(false);
  };

  useEffect(() => {
    fetchAndSetCharacters(); // Fetch initial characters
  }, []);

  const handleSearch = () => {
    fetchAndSetCharacters(searchTerm);
  };

  return (
    <div className="app">
      <h1 className="title">Rick & Morty Characters</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="character-grid">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
