import React from "react";
import "./Statements.css";
import ProfileImage from "../../img/caco.jpg";

const Statements = () => {
  return (
    <div className="statements">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="First statement" />
        <input type="text" placeholder="Second statement" />
        <input type="text" placeholder="Third statement" />
        <div className="send-statement">
          <button className="button st-button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Statements;
