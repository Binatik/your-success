import React, { useRef, useEffect } from "react";
import styled from "styled-components";

import { getRandomInt } from "@src/store/helpers/getRandomInt";
import { Container } from "@src/store/styled/components/others";

const Printing = ({ bg, color, texts, children }) => {
  const textRef = useRef(null);
  const countIndexRef = useRef(0);
  const countSymbolRef = useRef(0);
  const printingRef = useRef("");

  function renderLine() {
    const timeout = setTimeout(() => {
      printingRef.current += texts[countIndexRef.current][countSymbolRef.current] + "";

      if (textRef.current === null) return;

      textRef.current.innerHTML = printingRef.current;
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
    }, getRandomInt(20, 80));
  }

  useEffect(() => {
    renderLine();
  }, []);

  return (
    <>
      <Printing.Printing bg={bg}>
        <FlexContainer>
          <Content>
            {texts.map((text, index) => (
              <TitleHidden key={index}>{text}</TitleHidden>
            ))}
            <Title color={color} ref={textRef}></Title>
            {children}
          </Content>
        </FlexContainer>
      </Printing.Printing>
    </>
  );
};

// __StyledComponents

Printing.Printing = styled.div`
  padding: 60px 0;
  background-color: ${props => props.bg};
`;

const TitleHidden = styled.pre`
  cursor: default;
  margin: 15px 0;
  opacity: 0;
  font-family: "Montserrat", sans-serif;
  color: ${props => props.color};
  white-space: pre-wrap;

  ${props => props.theme.fontStyle.title};

  font-size: 2.5rem;
`;

const Title = styled(TitleHidden)`
  cursor: auto;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 1;
`;

const FlexContainer = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Content = styled.div`
  position: relative;
  margin: 20px;
`;

export { Printing };
