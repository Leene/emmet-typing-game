import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";
import Logo from "../img/emmetgame_frontlogo_schatten.png";
import HighScoreTable from "./HighScoreTable";

export default function Home() {
  return (
    <Main>
      <LOGO alt="logo" src={Logo} />
      <Text>
        Erlerne Emmet-Befehle spielerisch! <br />
        Drücke oben rechts den Start-Button.
        <br />
        Viel Spaß! :-D
      </Text>

      <URLBtn
        title="Externer Link zur offiziellen Auflistung der Emmet-Befehle"
        href="https://docs.emmet.io/cheat-sheet/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Emmet-Befehle
      </URLBtn>
      <Text>
        <small>(Zum offiziellen Cheat-Sheet der Emmet-Befehle)</small>
      </Text>
    </Main>
  );
}

const Main = styled.section`
  text-align: center;
`;
const LOGO = styled.img`
  text-align: center;
  width: 50vw;
  max-width: 300px;
  margin: 10vh 0 0 0;
`;

const URLBtn = styled.a`
  background-color: rgb(${COLORS.primary});
  color: rgb(${COLORS.lightText});
  text-decoration: none;
  letter-spacing: 1px;
  box-shadow: 1px 2px 3px 3px rgba(58, 32, 10, 0.2);
  padding: 10px;
  &:hover {
    background-color: rgb(${COLORS.middleviolet});
  }
`;

const Text = styled.p`
  font-size: 1em;
  margin-bottom: 5em;
`;
