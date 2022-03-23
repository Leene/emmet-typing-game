import React, { useState } from "react";
import styled from "styled-components";
import { COLORS, VIEWPORT } from "../constants";
import StaticHeart from "../components/StaticHeart";
import AnimatedHeart from "../components/AnimatedHeart";

const life = "https://img.icons8.com/material/40/000000/hearts--v1.png";

export default function GameInterface(props) {
  const { hint, scoreState, life, stopAnimation, setStopAnimation } = props;
  const [showText, setShowText] = useState(false);

  const animatedHeart = (
    <AnimatedHeart
      stopAnimation={stopAnimation}
      setStopAnimation={setStopAnimation}
    />
  );

  function renderLifecon(amount) {
    const DivHeart = styled.div`
      display: flex;
      flex-direction: row;
      padding: 0;
    `;

    const rows = [];
    if (amount === 3) {
      rows.push(<StaticHeart />);
      rows.push(<StaticHeart />);
      rows.push(<StaticHeart />);
    } else if (amount === 2) {
      /* rows.push(animatedHeart); */
      rows.push(<StaticHeart />);
      rows.push(<StaticHeart />);
      // rows.splice(0, 1)
    } else if (amount === 1) {
      /* rows.push(animatedHeart); */
      rows.push(<StaticHeart />);
    } else if (amount === 0) {
      //TODO: einkommentieren bei animierten Herzen
      /*rows.push(animatedHeart);*/
    }
    return <DivHeart>{rows}</DivHeart>;
  }
  ////////////////////////////////////////////////////////////

  return (
    <>
      <Score>
        <p>{scoreState}</p>
      </Score>
      <Hint>
        <HintButton
          title="Lösung ein-/ausblenden"
          onClick={() => setShowText(!showText)}
        >
          HINT
        </HintButton>
        <HintTextDiv>{showText && <HintText>{hint}</HintText>}</HintTextDiv>
      </Hint>
      {/*            <Life>{Lifecon(life)}</Life>*/}
      <Life>{renderLifecon(life)}</Life>
    </>
  );
}

function Lifecon(amount) {
  const rows = [];
  for (var i = 0; i < amount; i++) {
    rows.push(<LifeIcon alt="" src={life} key={i} />);
  }
  return <>{rows}</>;
}

const HintTextDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: 100%;
  background-color: rgb(${COLORS.hintfield});
  border-radius: 0 20px 20px 0;
  box-shadow: 2px 2px 5px 6px ${COLORS.shadow_RGBA};
`;

const HintText = styled.p`
  color: rgb(${COLORS.light});
  margin: 0;
  padding: 0;
  font-size: 0.8em;
`;

const HintButton = styled.button`
  cursor: pointer;
  color: rgba(${COLORS.light}, 0.7);
  font-size: 0.6em;
  font-weight: bold;
  letter-spacing: 2px;
  width: 20%;
  height: 100%;
  background-color: rgb(${COLORS.middleviolet});
  border: none;
  border-radius: 20px 0 0 20px;
  box-shadow: 2px 2px 5px 6px ${COLORS.shadow_RGBA};
  &:hover {
    background-color: rgb(${COLORS.background1_NUM});
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
  ${VIEWPORT.small} {
    font-size: 0.5em;
  }

  ${VIEWPORT.medium} {
    font-size: 0.7em;
  }

  ${VIEWPORT.large} {
  }
`;

const Score = styled.div`
  grid-area: score;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1em;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${COLORS.text};
  min-width: 3em;
  height: 30px;
`;
const Hint = styled.div`
  grid-area: middle;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1em;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${COLORS.light};
  min-width: 4em;
  height: 30px;
`;

const Life = styled.div`
  grid-area: life;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: bold;
  min-width: 4em;
  height: 30px;
  margin: 0 20px;
  ${VIEWPORT.small} {
  }

  ${VIEWPORT.medium} {
  }

  ${VIEWPORT.large} {
    margin-right: 0;
  }
`;

const LifeIcon = styled.img`
  padding: 2px;
  width: 20px;
  height: 20px;
`;
