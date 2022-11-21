import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Timer.css";

function Timer() {
  const [seconds, setSeconds] = useState(30);
  const progressbar = useRef();

  useEffect(() => {
    if (seconds === 0) return;
    const oneSecond = 1000;
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, oneSecond);
    return () => clearInterval(interval);
  }, [seconds]);

  if (seconds === 0) return;
  return (
    <div
      className="timer"
      style={{
        display: seconds > 0 ? "block" : "none",
      }}
    >
      <div className="label">{seconds}</div>
      <div className="border">
        <div
          ref={progressbar}
          id="#progressbar"
          className={`progressbar ${seconds > 0 ? "animate" : ""} ${
            seconds > 10 ? "pb-color-1" : "pb-color-2"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Timer;
