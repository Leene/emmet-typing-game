import React from "react";
import styled from "styled-components";
import { COLORS, VIEWPORT } from "../constants";

export default function BTN(props) {
  const { type, onClick } = props;

  const trash_icon =
    "https://img.icons8.com/material-outlined/48/ffffff/trash--v2.png";
  const clear_icon =
    "https://img.icons8.com/material-outlined/48/ffffff/clear-symbol--v1.png";
  const ok_icon = "https://img.icons8.com/android/48/ffffff/checkmark.png";

  function renderBtn() {
    const btn = props.type;

    //////////////////////////////

    if (props.type === "ok") {
      return (
        <Btn title="Eingabe bestätigen" onClick={props.onClick}>
          <img alt="Icon von Löschtaste" src={ok_icon} />
        </Btn>
      );
    } else if (props.type === "clear") {
      return (
        <Btn title="Eingabe bestätigen" onClick={props.onClick}>
          <img alt="Icon von Löschtaste" src={clear_icon} />
        </Btn>
      );
    } else if (props.type === "delete") {
      return (
        <Btn title="Eingabe bestätigen" onClick={props.onClick}>
          <img alt="Icon von Löschtaste" src={trash_icon} />
        </Btn>
      );
    }

    /////////////////////////////

    //return <Btn>{btn}</Btn>;
  }

  return <>{renderBtn()}</>;
}

const Btn = styled.button`
  cursor: pointer;
  color: rgb(${COLORS.lightText});
  font-weight: bold;
  letter-spacing: 1px;
  background-color: rgba(${COLORS.violet}, 0.5);
  border: none;
  border-radius: 20px;
  box-shadow: 1px 2px 3px 3px rgba(58, 32, 10, 0.2);
  min-width: 60px;
  height: 40px;
  margin: 20px 10px 0;
  padding: 10px;
  &:hover {
    background-color: rgb(${COLORS.background1_NUM});
  }
  img {
    width: 24px;
    height: 24px;
  }
  :not(:last-child) {
    ${VIEWPORT.small} {
    }

    ${VIEWPORT.medium} {
    }

    ${VIEWPORT.large} {
      display: none;
    }
  }
`;
