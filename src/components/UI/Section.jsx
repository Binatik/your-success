import React from "react";
import styled from "styled-components";

import { Container } from "@src/store/styled/components/others";

const Section = ({ anchor, color, children }) => {
  return (
    <>
      <Section.Section anchor={anchor} color={color}>
        <Container>{children}</Container>
      </Section.Section>
    </>
  );
};

export { Section };

// __StyledComponents

Section.Section = styled.section`
  padding: 80px 0;
  overflow: hidden;
  background: ${props => props.color};
  min-height:500px;
`;
