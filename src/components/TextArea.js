import React, { useState } from "react";
import styled from "styled-components";
import { COLORS, VIEWPORT } from "../constants";
import BTN from "./BTN";

export default function TextArea(props) {
  const {
    amountOfQuestions,
    hint,
    inputText,
    setInputText,
    setScoreState,
    scoreState,
    setFeedback,
    life,
    setLife,
    setVisible,
    orderNum,
    setOrderNum,
    setDialogType,
  } = props;

  const trash_icon =
    "https://img.icons8.com/material-outlined/48/ffffff/trash--v2.png";
  const clear_icon =
    "https://img.icons8.com/material-outlined/48/ffffff/clear-symbol--v1.png";
  const ok_icon = "https://img.icons8.com/android/48/ffffff/checkmark.png";

  const handleOKBtnClick = () => {
    console.log("life1: " + life);
    if (inputText === hint) {
      setScoreState(scoreState + 10);
      setFeedback("Richtig :-D");
      setInputText("Welcher Emmet-Befehl passt?");
      if (orderNum < amountOfQuestions - 1) {
        // -1 da es hier dem höchsten Indexwert von Array "order" entsprechen muss und Indizes bei 0 starten // Refactor
        setOrderNum(orderNum + 1);
      } else {
        setFeedback("Super, alle Fragen richtig gelöst!");

        setVisible(true);
        setDialogType("winner");
      }
    } else {
      setLife(life - 1);

      setFeedback("Falsch :-(");

      setInputText("Welcher Emmet-Befehl passt?");

      if (life <= 1) {
        setFeedback("Game Over");
        setVisible(true);
        setDialogType("game_over");
      }
    }

    console.log("life2: " + life);
  };

  const handleDeleteBtnClick = () => {
    setInputText("Deine neue Eingabe ...");
  };
  const handleDeleteOneCharacterBtnClick = () => {
    setInputText(inputText.slice(0, -1));
  };

  //event.preventDefault();
  console.log("inputText" + inputText);

  return (
    <>
      <Textarea>{inputText}</Textarea>
      <Input
        length="20"
        onChange={handleTextInput}
        placeholder="Welcher Emmet-Befehl passt?"
      />

      <BTN type={"delete"} onClick={handleDeleteBtnClick} />
      <BTN type={"clear"} onClick={handleDeleteOneCharacterBtnClick} />
      <BTN type={"ok"} onClick={handleOKBtnClick} />
    </>
  );
  function handleTextInput(e) {
    e.preventDefault();
    setInputText(e.target.value);
  }
}

export function Feedback(feedbackText) {
  const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    margin-bottom: 5px;
  `;
  const DIV = styled.div`
    color: rgb(${COLORS.light});
    font-size: 0.8em;
    font-weight: bold;
    background-color: rgba(${COLORS.light}, 0.2);
    width: 50%;
    border-radius: 20px;
    margin: 20px;
  `;
  return (
    <Wrap>
      <DIV>{feedbackText}</DIV>
    </Wrap>
  );
}

const Textarea = styled.div`
  contenteditable: true;
  overflow-wrap: break-word;
  color: white;
  font-weight: bold;
  box-shadow: inset 2px 2px 3px 2px rgba(${COLORS.shadow}, 0.2);
  background-color: #393c8060;
  padding: 10px;
  margin-top: 8px;
  min-height: 1.4em;

  ${VIEWPORT.small} {
  }

  ${VIEWPORT.medium} {
  }

  ${VIEWPORT.large} {
    display: none;
  }
`;

/* "box-sizing: border-box; " verhindert das default padding bei Input, ohne ist Input zu groß* >>>*/
const Input = styled.input`
  text-align: center;
  color: white;
  font-size: 1em;
  font-weight: bold;
  background-color: #393c8060;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  margin-top: 8px;

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

  ${VIEWPORT.small} {
    display: none;
  }

  ${VIEWPORT.medium} {
    display: none;
  }

  ${VIEWPORT.large} {
  }
`;
