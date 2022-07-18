import React, { useState } from "react";
import styled from "styled-components";

import { Container, Support } from "@src/store/styled/components/others";
import { SecondaryText } from "@src/store/styled/components/texts";
import { initIconСontacts } from "@src/store/state";

import { Logo } from "@cmp/UI/Logo";
import { IconContacts } from "@cmp/UI/IconContacts";

const Footer = () => {
  const [iconСontacts, setIconСontacts] = useState(initIconСontacts);

  return (
    <>
      <Footer.Footer>
        <Container>
          <Logo title="Твой" toTitle="успех" />
          <SecondaryText style={{ margin: "5px 0 10px 0" }}>© Copyright 2022 Натали - партнер Oriflame</SecondaryText>
            <IconContacts contacts={iconСontacts} />
        </Container>
      </Footer.Footer>
    </>
  );
};

Footer.Footer = styled.footer`
  background-color: ${props => props.theme.colors.surface};
`;

export { Footer };
