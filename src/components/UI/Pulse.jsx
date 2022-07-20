import React from "react";
import styled, { keyframes } from "styled-components";

import { Container } from "@src/store/styled/components/others";

const pulse = keyframes`
0% {
  transform:scale(1);
  opacity: 0;

}

50% {
  opacity: 1;

}

100% {
  transform:scale(1.9);
  opacity: 0;
}
`;

const Line = styled.div`
  border-radius: 50%;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: 1px solid #f6f6f6;
  transition: border 1.2s, color 1.2s;
`;

const OneLine = styled(Line)`
  animation: ${pulse} 2s infinite;
`;

const TwoLine = styled(Line)`
  animation: ${pulse} 2s infinite 0.9s;
`;

const Content = styled.div`
  transform: translate(2px, 0);
  color: #00ccff;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.desktopFirst.tablet} {
    font-size: 24px;
  }
`;

const Pulse = ({ handleClick, componentIcon }) => {
  return (
    <>
      <Container>
        <Pulse.Pulse type="button" onClick={handleClick}>
          Play
          <OneLine></OneLine>
          <TwoLine></TwoLine>
          <Content>{componentIcon}</Content>
        </Pulse.Pulse>
      </Container>
    </>
  );
};

export { Pulse };

Pulse.Pulse = styled.button`
  cursor: pointer;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  margin: 20px 0;
  font-size: 0;
  z-index: 1;
  border-radius: 50%;
  background-color: #fff;

  &:hover ${Line} {
    border: 1px solid #00ccff;
  }

  @media ${props => props.theme.desktopFirst.tablet} {
    width: 50px;
    height: 50px;
  }
`;
