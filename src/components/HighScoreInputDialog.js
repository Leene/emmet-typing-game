import React from "react";
import styled from "styled-components";
import { COLORS, VIEWPORT } from "../constants";
import BTN from "./BTN";

function HighScoreInputDialog(props) {
  const { scoreState } = props;
  const points = 30;

  const handleOKBtnClick = () => {
    return console.log("Klick für Scoretabelle");
  };

  return (
    <Div>
      <P>
        Du hast {scoreState} Punkte erspielt. Um sie zu speichern, gib bitte
        deinen Namen ein:
      </P>
      <InputButtonDiv>
        <Input length="15" onChange={handleTextInput} placeholder="Dein Name" />
        <BTN type={"ok"} onClick={handleOKBtnClick} />
      </InputButtonDiv>
    </Div>
  );
  function handleTextInput(e) {
    e.preventDefault();
    console.log("Name: " + e.target.value);
    //setInputText(e.target.value);
  }
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
