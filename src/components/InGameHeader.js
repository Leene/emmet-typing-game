import React from "react";
import Headlogo from "../img/emmetgame_headlogo_schatten.png";
import styled from "styled-components";
import { COLORS, VIEWPORT } from "../constants";

export default function InGameHeader() {
  return (
    <Header>
      <HeadLogo alt="logo" src={Headlogo} />
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
`;
const HeadLogo = styled.img`
  height: 30px;
  opacity: 1;
  padding: 2px;
`;
