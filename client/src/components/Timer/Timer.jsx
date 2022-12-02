import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startTimer } from "../../actions/TimerAction";
import "./Timer.css";

function Timer() {
  const dispatch = useDispatch();
  const { seconds } = useSelector((state) => state.timerReducer);
  const progressbar = useRef();

  const restartProgressBar = () => {
    progressbar.current.classList.remove("animate");
    void progressbar.current.offsetWidth;
    progressbar.current.classList.add("animate");
  };

  useEffect(() => {
    if (seconds === 0) return null;
    if (seconds === 10) restartProgressBar();
    const oneSecond = 1000;
    const interval = setInterval(() => {
      dispatch(startTimer(seconds - 1));
    }, oneSecond);
    return () => clearInterval(interval);
  }, [seconds]);

  if (seconds === 0) return null;
  return (
    <div
      className="timer"
      style={{
        display: seconds > 0 ? "block" : "none",
        color: seconds > 5 ? "black" : "red",
      }}
    >
      <div className="label">{seconds}</div>
      <div className="border">
        <div
          ref={progressbar}
          id="#progressbar"
          className={`${seconds > 0 ? "progressbar animate" : ""} ${
            seconds > 5 ? "pb-color-1" : "pb-color-2"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Timer;
