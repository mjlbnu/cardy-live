import React from "react";
import { UilSearch, UilFilter } from "@iconscout/react-unicons";
import "./BoxSearch.css";

const BoxSearch = ({ setSearchTerm }) => {

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="BoxSearch">
      <div className="Search">
        <div className="s-icon">
          <UilFilter />
        </div>
        <input
          type="text"
          placeholder="Find a player"
          // Captura a mudança no input
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default BoxSearch;
