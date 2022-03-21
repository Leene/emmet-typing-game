import React from "react";
import styled from "styled-components";
import { COLORS, VIEWPORT } from "../constants";
import BTN from "./BTN";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { FirebaseError } from "firebase/app";

function HighScoreInputDialog(props) {
  const [nameOfPlayer, setNameOfPlayer] = React.useState("");
  const [scoreInDB, setScoreInDB] = React.useState("");
  const { scoreState } = props;

  const handleSubmit = async (e) => {
    let franz = "444";
    let score = scoreState;
    e.preventDefault();
    console.log("score" + scoreState);

    if (nameOfPlayer !== "") {
      await addDoc(collection(db, "highscore"), {
        nameOfPlayer,
        scoreInDB: score,
        createdAt: serverTimestamp(),
        /*  completed: false, */
      });
      setNameOfPlayer("");
      setScoreInDB("");
    }
  };

  return (
    <Div>
      <form onSubmit={handleSubmit}>
        <P>
          Du hast {scoreState} Punkte erspielt. Um sie zu speichern, gib bitte
          deinen Namen ein:
        </P>
        <InputButtonDiv>
          <div className="input_container">
            <Input
              type="text"
              placeholder="Dein Name"
              value={nameOfPlayer}
              onChange={(e) => setNameOfPlayer(e.target.value)}
            />
          </div>
          <div className="btn_container">
            <BTN type={"ok"}></BTN>
          </div>
        </InputButtonDiv>
      </form>
    </Div>
  );
}

export default HighScoreInputDialog;

const Div = styled.div`
  border-top: 1px solid #393c8060;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 20px auto;
`;

const P = styled.p`
  font-size: 0.7em;
  padding: 0 20px;
`;

const InputButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Input = styled.input`
  text-align: center;
  color: white;
  font-size: 0.8em;
  font-weight: bold;
  background-color: #393c8060;
  box-sizing: border-box;
  width: 80%;
  padding: 10px;

  //margin-top: 8px;
  margin: 8px;
  min-height: 1.4em;
  border: none;
  box-shadow: inset 2px 2px 3px 2px rgba(${COLORS.shadow}, 0.2);
  ::placeholder {
    color: white;
    opacity: 0.5;
  }
  :focus,
  input:focus {
    outline: 2px solid rgba(255, 255, 255, 0.5);
  }
`;
