import React from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchBar = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <div className="search-bar">
      <Search
        placeholder="Search for your favourite character"
        value={searchTerm}
        onSearch={onSearch}
        size="large"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar-"
      />
    </div>
  );
};

export default SearchBar;
