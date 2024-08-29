import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import "./BoxSearch.css";

const BoxSearch = ({ setSearchTerm }) => {

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="BoxSearch">
      <div className="Search">
        <input
          type="text"
          placeholder="#Find a player"
          // Captura a mudança no input
          onChange={handleSearchChange}
        />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default BoxSearch;
