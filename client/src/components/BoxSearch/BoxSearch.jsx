import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import "./BoxSearch.css";

const BoxSearch = () => {
  return (
    <div className="BoxSearch">
      <div className="Search">
        <input type="text" placeholder="#Find a player" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default BoxSearch;
