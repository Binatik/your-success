import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const scale = keyframes`
0% {
  transform:scaleX(0);
  transform-origin: left;

}

50% {
  transform:scaleX(1);
  transform-origin: left;

}
  
50.1% {
  transform:scaleX(1);
  transform-origin: right;

}
  
100% {
  transform:scaleX(0);
  transform-origin: right;
    
}
`;

const Content = styled.div`
  background-color: #00000099;
  padding: 15px;
  border-radius: 5px;
`;

const Line = styled.span`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: -3px;
    width: 100%;
    height: 3px;
    background: #fff;
    animation: ${scale} 2s linear infinite;
  }
`;

const LineTop = styled(Line)`
  transform: rotate(180deg);
`;

const Frame = ({ isPadding, children }) => {
  return (
    <>
      <Frame.Frame isPadding={isPadding}>
        <Line></Line>
        <LineTop></LineTop>
        <Content>{children}</Content>
      </Frame.Frame>
    </>
  );
};

Frame.Frame = styled.div`
  position: relative;
  height: 100%;
  max-width: 800px;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 30px auto;
  padding: ${props => (props.isPadding ? "20px" : 0)};
  border: 3px solid #00ccff;
  box-shadow: #00000030 0px 7px 29px 0px;
`;

export { Frame };
