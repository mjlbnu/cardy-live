import React, { useRef } from "react";
import "./Statements.css";
import ProfileImage from "../../img/caco.jpg";
import { useDispatch, useSelector } from "react-redux";
import { uploadStatements } from "../../actions/UploadAction";

const Statements = () => {
  const sending = useSelector((state) => state.statementsReducer.sending);
  const { user } = useSelector((state) => state.authReducer.authData);
  const firstStatement = useRef(),
    secondStatement = useRef(),
    thirdStatement = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStatements = {
      gameId: "id1",
      currentUserId: user._id,
      statements: [
        firstStatement.current.value,
        secondStatement.current.value,
        thirdStatement.current.value,
      ],
    };
    dispatch(uploadStatements(newStatements));
    reset();
  };

  const reset = () => {
    firstStatement.current.value =
      secondStatement.current.value =
      thirdStatement.current.value =
        "";
  };

  return (
    <div className="statements">
      <img src={ProfileImage} alt="" />
      <div>
        <input
          ref={firstStatement}
          required
          type="text"
          placeholder="First statement"
        />
        <input
          ref={secondStatement}
          required
          type="text"
          placeholder="Second statement"
        />
        <input
          ref={thirdStatement}
          required
          type="text"
          placeholder="Third statement"
        />
        <div className="send-statement">
          <button
            className="button st-button"
            onClick={handleSubmit}
            disabled={sending}
          >
            {sending ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Statements;
