import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import "./CardsContainer.css";

const CardsContainer = () => {
  const { statements, loading } = useSelector(
    (state) => state.statementsReducer
  );
  const userId = statements.userId;

  if (!statements) return null;

  return (
    <div className="container">
      {loading
        ? "Fetching statements"
        : statements.statements.map((statement, index) => {
            return <Card text={statement} index={index + 1} userId={userId} />;
          })}
    </div>
  );
};

export default CardsContainer;
