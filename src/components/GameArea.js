import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants'
import GameInterface from './GameInterface'
import { exercises } from '../data/exercises.json'
import TextArea, { Feedback } from './TextArea'
import GameOverDialog from './GameOverDialog'
import WinnerDialog from './WinnerDialog'
import CreateOrder from './CreateOrder'
import Keyboard from './Keyboard'
import Headlogo from "../img/emmetgame_headlogo_schatten.png"

export default function GameArea() {
    let order = CreateOrder()
    const [inputText, setInputText] = useState('Welcher Emmet-Befehl passt?')
    const [scoreState, setScoreState] = useState(0)
    const [feedback, setFeedback] = useState(' ')
    const [life, setLife] = useState(3)
    const [visible, setVisible] = useState(false)
    const [winnerDialog, setWinnerDialog] = useState(false)
    const [orderNum, setOrderNum] = useState(0)
    let hint = exercises[order[orderNum]].emmet

    const newText = exercises[order[orderNum]].result
        .split('\n')
        .map((item, i) => {
            return (
                <span key={i}>
                    {item}
                    <br />
                </span>
            )
        })

    return (
        <Gamefield>
            <Header>
                <HeadLogo
                    alt="logo"
                    src={Headlogo}
                />
            </Header>
            <WinnerDialog
                winnerDialog={winnerDialog}
                setWinnerDialog={setWinnerDialog}
                setLife={setLife}
                setScoreState={setScoreState}
                setFeedback={setFeedback}
                setOrderNum={setOrderNum}
            />
            <GameOverDialog
                visible={visible}
                setVisible={setVisible}
                setLife={setLife}
                setScoreState={setScoreState}
                setFeedback={setFeedback}
                setOrderNum={setOrderNum}
            />
            <Boxarea>
                <div>{Feedback(feedback)}</div>
                <DIV>
                    <p>
                        {orderNum + 1} / {exercises.length}
                    </p>
                </DIV>
                <InsetShadow>
                    <Box>
                        <Textbox>
                            <code>{newText}</code>
                        </Textbox>
                        <TextArea
                            amountOfQuestions={exercises.length}
                            hint={hint}
                            inputText={inputText}
                            setInputText={setInputText}
                            scoreState={scoreState}
                            setScoreState={setScoreState}
                            setFeedback={setFeedback}
                            setLife={setLife}
                            life={life}
                            setVisible={setVisible}
                            orderNum={orderNum}
                            setOrderNum={setOrderNum}
                            setWinnerDialog={setWinnerDialog}
                        />
                        {/* {TextArea(getTypedText(), inputText, setInputText, hint)} */}
                    </Box>
                </InsetShadow>
            </Boxarea>
            <Gameinterface>
                <GameInterface
                    hint={hint}
                    scoreState={scoreState}
                    life={life}
                />
                <KeyboardStyle>
                    <Keyboard
                        inputText={inputText}
                        setInputText={setInputText}
                        order={order}
                        orderNum={orderNum}
                    />
                </KeyboardStyle>
            </Gameinterface>
        </Gamefield>
    )
}

const Header = styled.header`
    display: flex;
    justify-content: center;
    position: fixed;
`
const HeadLogo = styled.img`
    height: 30px;
    opacity: 1;
    padding: 2px;
`

const Gamefield = styled.section`
    display: flex;
    justify-content: center;
    text-align: center;
    height: 90vh;
    margin-top: -40px;
`

const Boxarea = styled.div`
    width: auto;
    height: auto;
    margin-top: 10vh;
`
const DIV = styled.div`
    display: flex;
    justify-content: flex-end;
    & p {
        color: rgb(${COLORS.light});
        font-size: 0.5em;
    }
    margin-top: -4vh;
`

const Box = styled.div`
    background-color: rgba(${COLORS.light}, 0.2);
    padding: 10px;
    border-style: solid;
    border-width: 2px;
    border-image: linear-gradient(
            to bottom,
            rgba(${COLORS.light}, 0) 1%,
            rgba(${COLORS.light}, 0.8) 10%,
            rgba(${COLORS.light}, 0) 100%
        )
        1 100%;
    width: 80vw;
    height: auto;
    box-shadow: 1px 1px 8px 3px ${COLORS.shadow_RGBA};
`
const InsetShadow = styled.div`
    box-shadow: inset 1px 1px 2px 0px rgba(${COLORS.light}, 0.8);
`
const Textbox = styled.div`
    color: rgb(${COLORS.code});
    scrollbar-width: thin;
    scrollbar-color: rgba(${COLORS.primary}, 0.3) rgba(${COLORS.primary}, 0);
    background-color: rgba(${COLORS.violet}, 0.7);
    padding: 10px 3px;
    height: 20vh;
    overflow: scroll;
    overscroll-behavior: none;
`

const Gameinterface = styled.div`
    display: grid;
    grid-template-areas:
        'score middle life'
        'keyboard keyboard keyboard';
    grid-template-rows: 1fr 5fr;
    grid-template-columns: 1fr 6fr 1fr;
    position: fixed;
    bottom: 0px;
    width: 100vw;
`

const KeyboardStyle = styled.section`
    grid-area: keyboard;
    display: flex;
    user-select: none;
    font-size: calc(10px + 2vmin);
    width: 100vw;
    margin-top: -1vh;
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 2px 2px 5px 6px ${COLORS.shadow_RGBA};

    & button {
        color: ${COLORS.text};
        text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.5);
        font-weight: bold;
        font-size: 1.3em;
        border: none;
        margin: 1px;
        background: linear-gradient(
            135deg,
            rgba(${COLORS.background2_NUM}, 0.5) 1%,
            rgba(${COLORS.light}, 0.4) 35%,
            rgb(${COLORS.background1_NUM}, 1) 100%
        );
    }
`
