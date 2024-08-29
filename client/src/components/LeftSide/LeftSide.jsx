import React, { useState } from "react";
import Logo from "../Logo/Logo";
import BoxSearch from "../BoxSearch/BoxSearch";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./LeftSide.css";
import PlayersCard from "../PlayersCard/PlayersCard";

const LeftSide = () => {

  // Novo estado de busca
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="LeftSide">
      <Logo />
      <ProfileCard />
      {/* Passa a função setSearchTerm */}
      <BoxSearch setSearchTerm={setSearchTerm} />
      {/* Passa o termo de busca */}
      <PlayersCard searchTerm={searchTerm} />
    </div>
  );
};

export default LeftSide;
