import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import { Container } from "@src/store/styled/components";

const TitleHidden = styled.pre`
  opacity: 0;
  font-family: "Montserrat", sans-serif;
  color: ${props => props.color};
  white-space: pre-wrap;

  ${props => props.theme.fontStyle.title};

  font-size: 2.5rem;
`;

const Title = styled(TitleHidden)`
  position: absolute;
  opacity: 1;
`;

const FlexContainer = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Printing = ({ bg, color, texts, children }) => {
  const textRef = useRef();
  const countIndexRef = useRef(0);
  const countSymbolRef = useRef(0);

  let text = "";

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function renderLine() {
    const timeout = setTimeout(() => {
      text += texts[countIndexRef.current][countSymbolRef.current] + "";

      if (textRef.current === null) return;

      textRef.current.innerHTML = text;
      countSymbolRef.current++;

      if (countSymbolRef.current >= texts[countIndexRef.current].length) {
        countSymbolRef.current = 0;
        countIndexRef.current++;

        if (countIndexRef.current === texts.length) {
          clearTimeout(timeout);
          return true;
        }
      }
      renderLine();
    }, getRandomInt(30, 130));
  }

  useEffect(() => {
    renderLine();
  }, []);

  return (
    <>
      <Printing.Printing bg={bg}>
        <FlexContainer>
          {texts.map((text, index) => (
            <TitleHidden key={index}>{text}</TitleHidden>
          ))}
          <Title color={color} ref={textRef}></Title>
          {children}
        </FlexContainer>
      </Printing.Printing>
    </>
  );
};

Printing.Printing = styled.div`
  padding: 60px 0;
  background-color: ${props => props.bg};
`;

export { Printing };
