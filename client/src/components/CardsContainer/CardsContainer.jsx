import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGamerStatements } from "../../actions/StatementsAction";
import Card from "../Card/Card";
import "./CardsContainer.css";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const { statements, loading } = useSelector(
    (state) => state.statementsReducer
  );

  useEffect(() => {
    //dispatch(getGamerStatements());
  }, []);

  if (!statements) return;

  return (
    <div className="container">
      {loading
        ? "Fetching statements"
        : statements.statements.map((statement, index) => {
            return <Card text={statement} index={index + 1} />;
          })}
    </div>
  );
};

export default CardsContainer;
