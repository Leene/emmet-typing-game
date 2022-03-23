import React from "react";
import styled from "styled-components";
import { COLORS, VIEWPORT } from "./constants";
import { Router, Link } from "@reach/router";
import GameArea from "./components/GameArea";
import Home from "./components/Home";
import "../src/App.css";
import HighScoreTable from "./components/HighScoreTable";

const home_icon = "https://img.icons8.com/material-rounded/48/ffffff/home.png";
const start_icon =
  "https://img.icons8.com/ios-filled/48/ffffff/circled-play.png";
const score_icon =
  "https://img.icons8.com/ios-filled/50/ffffff/leaderboard.png";

export default function App() {
  return (
    <Main>
      <Header>
        <div className="flex_row">
          <LinkStyled to="/emmet-typing-game/">
            <NavButton title="Zurück zum Startbereich">
              <img alt="" src={home_icon} />
            </NavButton>
          </LinkStyled>

          <LinkStyled to="/emmet-typing-game/highscoretable/">
            <NavButton title="Zur Punktetabelle">
              <img alt="" src={score_icon} />
            </NavButton>
          </LinkStyled>
        </div>
        <LinkStyled to="/emmet-typing-game/gamearea/">
          <NavButton title="Spiel starten">
            <img alt="" src={start_icon} />
          </NavButton>
        </LinkStyled>
      </Header>

      <Router>
        <Home path="/emmet-typing-game/"></Home>
        <HighScoreTable path="/emmet-typing-game/highscoretable/"></HighScoreTable>
        <GameArea path="/emmet-typing-game/gamearea/"></GameArea>
      </Router>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;

  background: linear-gradient(
    0deg,
    ${COLORS.background1} 9%,
    ${COLORS.background2} 100%
  );
  height: 100vh;

  font-size: calc(10px + 2vmin);
  color: #555;
  overflow: hidden;
`;

const Header = styled.header`
  display: flex;
  align-self: center;
  height: 10vh;
  width: 100vw;
  justify-content: space-between;

  ${VIEWPORT.small} {
  }

  ${VIEWPORT.medium} {
  }

  ${VIEWPORT.large} {
    width: 70vw;
  }
`;

// "display: flex;" bei Link verhindert das Verrutschen der NavButtons beim Ändern der Fenstergröße:
const LinkStyled = styled(Link)`
  display: flex;
`;

const NavButton = styled.button`
  background-color: rgba(${COLORS.primary}, 1);
  height: 3em;
  border: none;
  border-radius: 0 0 100px 100px;
  box-shadow: 2px 2px 5px 3px ${COLORS.shadow_RGBA};
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    background-color: rgb(${COLORS.background1_NUM});
  }
  img {
    width: 24px;
    height: 24px;
  }
  ${VIEWPORT.small} {
  }

  ${VIEWPORT.medium} {
  }

  ${VIEWPORT.large} {
    margin: 0 10px;
  }
`;
