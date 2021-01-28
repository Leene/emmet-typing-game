import React from 'react'
import styled from 'styled-components'
import { COLORS } from './constants'
import { Router, Link } from '@reach/router'
import GameArea from './components/GameArea'
import Home from './components/Home'

const home_icon = 'https://img.icons8.com/material-rounded/24/ffffff/home.png'
const start_icon ='https://img.icons8.com/ios-filled/24/ffffff/circled-play.png'

export default function App() {
    return (
        <Main>
            <Header>
                <LinkStyled to="/">
                    <NavButton title="Zurück zum Startbereich">
                        <img alt="" src={home_icon} />
                    </NavButton>
                </LinkStyled>
                <LinkStyled to="/gamearea">
                    <NavButton title="Spiel starten">
                        <img alt="" src={start_icon} />
                    </NavButton>
                </LinkStyled>
            </Header>
            <Router>
                <Home path="/"></Home>
                <GameArea path="/gamearea/"></GameArea>
            </Router>
        </Main>
    )
}

const Main = styled.main`
    background: linear-gradient(
        0deg,
        ${COLORS.background1} 9%,
        ${COLORS.background2} 100%
    );
    height: 100vh;
    font-size: calc(10px + 2vmin);
    color: #555;
    overflow: hidden;
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
`

// "display: flex;" bei Link verhindert das Verrutschen der NavButtons beim Ändern der Fenstergröße:
const LinkStyled = styled(Link)`
    display: flex;
`

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
`
