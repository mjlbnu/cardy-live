import React, { useRef, useState, useEffect } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import "./Statements.css";
import { useDispatch, useSelector } from "react-redux";
import { saveStatements } from "../../actions/StatementsAction";
import * as StatementsApi from "../../api/StatementsRequest";

const Statements = ({ modalStOpened, setModalStOpened }) => {
  const [changeText, setChangeText] = useState(0);
  const [itsALie, setItsaLie] = useState(0);
  const theme = useMantineTheme();
  const sending = useSelector((state) => state.statementsReducer.sending);
  const { user } = useSelector((state) => state.authReducer.authData);
  const firstStatement = useRef(),
    secondStatement = useRef(),
    thirdStatement = useRef();
  const dispatch = useDispatch();
  const [userStatements, setUserStatements] = useState([]);
  const [statementId, setStatementId] = useState();

  const getUserStatements = async () => {
    const { data } = await StatementsApi.getGamerStatements(user._id, true);
    if (data) {
      setUserStatements(data.statements);
      setStatementId(data._id);
      setItsaLie(+data.lie);
    }
  };

  useEffect(() => {
    getUserStatements();
  }, [user._id]);

  const handleChange = (e) => {
    const index = +e.target.dataset.index;
    const changedStatements = userStatements.map((statement, i) => {
      if (i === index) {
        return e.target.value;
      } else {
        return statement;
      }
    });
    setUserStatements(changedStatements);
  };

  const handleMouseHover = (e) => {
    const eventType = e.type;
    const button = e.target.dataset.lie;
    switch (eventType) {
      case "mouseenter":
        setChangeText(+button);
        break;
      default:
        setChangeText(0);
    }
  };

  const handleLie = (e) => {
    e.preventDefault();
    const lie = e.target.dataset.lie;
    setItsaLie(+lie);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (itsALie === 0) return;

    const newStatements = {
      id: statementId,
      gameId: "id1",
      currentUserId: user._id,
      statements: [
        firstStatement.current.value,
        secondStatement.current.value,
        thirdStatement.current.value,
      ],
      lie: itsALie,
    };
    dispatch(saveStatements(newStatements));
    clearFields();
    setModalStOpened(false);
  };

  const clearFields = () => {
    firstStatement.current.value =
      secondStatement.current.value =
      thirdStatement.current.value = "";
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalStOpened}
      onClose={() => setModalStOpened(false)}
    >
      <div className="statements">
        <div>
          <div className="statement">
            <input
              ref={firstStatement}
              required
              type="text"
              placeholder="First statement"
              name="firstStatement"
              onChange={handleChange}
              value={userStatements[0]}
              data-index={0}
            />
            <button
              className={`st-button ${itsALie === 1 ? "st-button-lie" : ""}`}
              onClick={handleLie}
              disabled={itsALie === 1}
              data-lie={1}
              onMouseEnter={handleMouseHover}
              onMouseLeave={handleMouseHover}
            >
              {itsALie === 1 || changeText === 1 ? "It's a lie" : "It's true"}
            </button>
          </div>
          <div className="statement">
            <input
              ref={secondStatement}
              required
              type="text"
              placeholder="Second statement"
              name="secondStatement"
              onChange={handleChange}
              value={userStatements[1]}
              data-index={1}
            />
            <button
              className={`st-button ${itsALie === 2 ? "st-button-lie" : ""}`}
              onClick={handleLie}
              disabled={sending}
              data-lie={2}
              onMouseEnter={handleMouseHover}
              onMouseLeave={handleMouseHover}
            >
              {itsALie === 2 || changeText === 2 ? "It's a lie" : "It's true"}
            </button>
          </div>
          <div className="statement">
            <input
              ref={thirdStatement}
              required
              type="text"
              placeholder="Third statement"
              name="thirdStatement"
              onChange={handleChange}
              value={userStatements[2]}
              data-index={2}
            />
            <button
              className={`st-button ${itsALie === 3 ? "st-button-lie" : ""}`}
              onClick={handleLie}
              disabled={sending}
              data-lie={3}
              onMouseEnter={handleMouseHover}
              onMouseLeave={handleMouseHover}
            >
              {itsALie === 3 || changeText === 3 ? "It's a lie" : "It's true"}
            </button>
          </div>
          <div className="send-statement">
            <span
              style={{
                display: itsALie > 0 ? "none" : "block",
                color: "red",
                fontSize: "12px",
                alignSelf: "flex-end",
                marginRight: "5px",
              }}
            >
              * select the lie!
            </span>
            <button
              className="button st-button"
              onClick={handleSubmit}
              disabled={sending}
            >
              {sending ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Statements;
