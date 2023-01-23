import React, { useEffect } from "react";
import "./Ranking.css";
import Timer from "../Timer/Timer";
import { useSelector, useDispatch } from "react-redux";
import { getRankingAgr } from "../../actions/RankingAction";

const Ranking = () => {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.timerReducer);
  const { ranking, loading } = useSelector((state) => state.rankingReducer);

  const renderTimer = () => {
    return <Timer data={timer.seconds} />;
  };

  useEffect(() => {
    dispatch(getRankingAgr());
  }, []);

  if(!ranking) return null;

  return (
    <div className="Ranking">
      {renderTimer()}
      <h3>Ranking</h3>
      {loading
        ? "Fetching ranking"
        : ranking.map((player) => {
          return (
            <div className="player" key={player._id}>
              <span>{player.firstname}</span>
              <span>{player.ranking.length > 0
                ? player.ranking[0].points
                : 'zero'} points</span>
            </div>
          );
        })}
    </div>
  );
};

export default Ranking;
