import React, { useState } from "react";
import styled from "styled-components";

import { Container } from "@src/store/styled/components/others";
import { SecondaryText } from "@src/store/styled/components/texts";
import { initIconСontacts } from "@src/store/state";

import { IconContacts } from "@cmp/UI/IconContacts";

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${props => props.theme.desktopFirst.phone} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Footer = () => {
  const [iconСontacts, setIconСontacts] = useState(initIconСontacts);

  return (
    <>
      <Footer.Footer>
        <Container>
          <FlexContainer>
            <IconContacts contacts={iconСontacts} />
            <SecondaryText>© Copyright 2022 Натали - партнер Oriflame</SecondaryText>
          </FlexContainer>
        </Container>
      </Footer.Footer>
    </>
  );
};

Footer.Footer = styled.footer`
  background-color: ${props => props.theme.colors.surface};
`;

export { Footer };
