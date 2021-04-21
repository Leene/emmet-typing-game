import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { COLORS } from '../constants'

export default function GameOverDialog(props) {
    const {
        visible,
        setVisible,
        setLife,
        setScoreState,
        setFeedback,
        setOrderNum,
    } = props

    const handleNoBtnClick = () => {
        setVisible(false) // GameOverdialog ausblenden, to refactor
        setLife(3)
        setScoreState(0)
        setFeedback('')
        setOrderNum(0)
    }

    const content = (
        <Wrap>
            <Header>
                <HeadLogo
                    alt="sad cloud"
                    src="https://img.icons8.com/dotty/80/000000/sad-cloud.png"
                />
            </Header>
            <H2>Ohje, leider verloren :-(</H2>
            <P>Spiel beenden oder nochmal spielen?</P>
            <BTNdiv>
                <Link to="/emmet-typing-game/">
                    <BTN title="Zurück zum Startbereich">Beenden</BTN>
                </Link>
                <Link to="/emmet-typing-game/gamearea/">
                    <BTN title="Startet neues Spiel" onClick={handleNoBtnClick}>
                        Nochmal
                    </BTN>
                </Link>
            </BTNdiv>
        </Wrap>
    )

    let toShow

    if (visible) {
        toShow = (
            <DIV>
                <InsetShadow>{content}</InsetShadow>
            </DIV>
        )
    } else {
        toShow = (
            <DIV hidden>
                <InsetShadow>{content}</InsetShadow>
            </DIV>
        )
    }

    return <>{toShow}</>
}

const BTNdiv = styled.div`
    display: flex;
    flex-direction: column;
`
const H2 = styled.div`
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 10px;
`

const P = styled.div`
    font-size: 0.8em;
`

const BTN = styled.button`
    background-color: rgba(${COLORS.violet}, 0.5);
    color: rgb(${COLORS.lightText});
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    min-width: 60px;
    border: none;
    border-radius: 20px;
    box-shadow: 1px 2px 3px 3px rgba(58, 32, 10, 0.2);
    margin: 20px 20px 0;
    padding: 10px;
    &:hover {
        background-color: rgb(${COLORS.background1_NUM});
    }
`

const Wrap = styled.div`
    width: 70vw;
`
const Header = styled.header`
    margin-top: 30px;
`
const HeadLogo = styled.img`
    opacity: 1;
    height: 80px;
    padding: 2px;
`
const InsetShadow = styled.div`
    position: absolute;
    height: 100%;
    box-shadow: inset 1px 1px 2px 0px rgba(${COLORS.light}, 0.8);
`

const DIV = styled.div`
    position: absolute;
    opacity: 1;
    background-color: rgb(${COLORS.hintfield});
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(
            to bottom,
            rgba(${COLORS.light}, 0) 1%,
            rgba(${COLORS.light}, 0.8) 10%,
            rgba(${COLORS.light}, 0) 100%
        )
        1 100%;
    box-shadow: 2px 2px 5px 3px ${COLORS.shadow_RGBA};
    width: 70vw;
    height: 47vh;
    margin-top: 10vh;
`
