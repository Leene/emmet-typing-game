import React from 'react'
import '../css/Style.css'
import { signs } from '../data/keyboard_symbols.json'
import { exercises } from '../data/exercises.json'
import styled from 'styled-components'
import { COLORS } from '../constants'

export default function Keyboard(props) {
    const { inputText, setInputText, order, orderNum } = props

    function renderLeftKeys() {
        const leftSide = signs.slice(0, 12)

        return leftSide.map((key) => (
            <KeysSideDiv
                onClick={() => handleClick(key.symbol)}
                key={key.symbol}
            >
                {key.symbol}
            </KeysSideDiv>
        ))
    }
    function renderRightKeys() {
        const rightSide = signs.slice(12, 24)
        return rightSide.map((key) => (
            <KeysSideDiv
                onClick={() => handleClick(key.symbol)}
                key={key.symbol}
            >
                {key.symbol}
            </KeysSideDiv>
        ))
    }

 

    function renderMiddleKeys() {

        const middleSide = exercises[order[orderNum]].btntext

        return middleSide.map((key) => (
            <KeysMiddleDiv onClick={() => handleClick(key)} key={key}>
                {key}
            </KeysMiddleDiv>
        ))
    }

    const handleClick = (symbol) => {
        if (inputText === 'Welcher Emmet-Befehl passt?') {
            setInputText(' ')
            setInputText(symbol)
        } else if (inputText === 'Deine neue Eingabe ...') {
            setInputText(' ')
            setInputText(symbol)
        } else {
            setInputText(inputText + symbol)
        }
    }
    return (
        <>
            <KeysSide>{renderLeftKeys()}</KeysSide>
            <KeysMiddle>{renderMiddleKeys()}</KeysMiddle>
            <KeysSide>{renderRightKeys()}</KeysSide>
        </>
    )
}
export const typedText = []
export function clickedKey(symbol) {
    typedText.push(symbol)
}

export function getTypedText() {
    return typedText
}

const KeysSide = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-weight: bold;
    font-size: 1.5em;
    text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.5);
    width: 35vw;
    height: 35vh;
`

const KeysSideDiv = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 30%;
    height: 25%;
    &:hover {
        background-color: rgb(${COLORS.violet});
    }
    &:active {
        color: ${COLORS.lightText};
        background: linear-gradient(
            45deg,
            rgb(75, 192, 215) 100%,
            rgb(220, 236, 255) 10%
        );
        box-shadow: 2px 2px 5px 6px rgba(58, 32, 10, 0.2);
    }
`

const KeysMiddle = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    overscroll-behavior: none;
    scrollbar-width: thin;
    scrollbar-color: rgba(${COLORS.primary}, 0.2)
        rgba(${COLORS.background1_NUM}, 0);
    width: 33%;
    height: 35vh;
`

const KeysMiddleDiv = styled.button`
    height: 25%;
    &:hover {
        background-color: rgb(${COLORS.violet});
    }
    &:active {
        color: #f2fcfd;
        background: linear-gradient(
            45deg,
            rgb(75, 192, 215) 100%,
            rgb(220, 236, 255) 10%
        );
        box-shadow: 2px 2px 5px 6px rgba(58, 32, 10, 0.2);
    }
`
