import React from "react";
import styled from "styled-components";

import { PrimaryLink, SecondaryText, Center } from "@src/store/styled/components";
import { Container } from "@src/store/styled/components";

const Footer = () => {
  return (
    <>
      <Footer.Footer>
        <Container>
          <SecondaryText>Натали - партнер Oriflame</SecondaryText>
        </Container>
      </Footer.Footer>
    </>
  );
};

Footer.Footer = styled.footer`
  background-color: ${props => props.theme.colors.surface}
`;

export { Footer };
