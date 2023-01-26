import React, { useEffect } from "react";
import "./Ranking.css";
import Timer from "../Timer/Timer";
import { useSelector, useDispatch } from "react-redux";
import { getRankingAgr } from "../../actions/RankingAction";

const Ranking = () => {
  const dispatch = useDispatch();
  const { lie } = useSelector((state) => state.lieReducer);
  const timer = useSelector((state) => state.timerReducer);
  const { ranking, loading } = useSelector((state) => state.rankingReducer);

  const renderTimer = () => {
    return <Timer data={timer.seconds} />;
  };

  /*
  const showRanking = (arr) => {
    const id = document.getElementById(arr[0]._id)
    if (id) {
      console.log(id);
      id.classList.remove("hide");
      arr.shift();
      if (arr.length > 0) {
      setTimeout(function () {
          showRanking(arr);
        }, 500);
      }
    }
  }
  */

  const createRanking = () => {
    return ranking.map((player) => {
      return (
        <div className="player pulse" key={player._id} id={player._id}>
          <span>{player.firstname}</span>
          <span>
            {player.ranking.length > 0 ? player.ranking[0].points : "zero"}{" "}
            points
          </span>
        </div>
      );
    });
  };

  useEffect(() => {
    dispatch(getRankingAgr());
    //showRanking(ranking);
  }, [lie]);

  if (!ranking) return null;

  return (
    <div className="Ranking">
      {renderTimer()}
      <h3>Ranking</h3>
      {loading ? "Fetching ranking" : createRanking()}
    </div>
  );
};

export default Ranking;
