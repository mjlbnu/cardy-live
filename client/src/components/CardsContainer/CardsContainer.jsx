import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import "./CardsContainer.css";
import { resetStatements } from "../../actions/StatementsAction";
import Countdown from "../CountDown/CountDown";

const CardsContainer = () => {
  const dispatch = useDispatch();
  const { statements, loading, error } = useSelector(
    (state) => state.statementsReducer
  );

  // Limpa os statements na montagem do componente
  React.useEffect(() => {
    dispatch(resetStatements());
  }, [dispatch]);

  if (loading) {
    return <div className="container">Fetching statements...</div>;
  }

  if (error) {
    return <div className="container">Error fetching statements</div>;
  }

  if (!statements) return null;

  const userId = statements.userId;

  return (
    <>
      <Countdown />
      <div className="container">
        {loading
          ? "Fetching statements"
          : statements.statements.map((statement, index) => {
              return <Card text={statement} index={index + 1} userId={userId} />;
            })}
      </div>
    </>
  );
};

export default CardsContainer;
