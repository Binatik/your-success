import React from "react";
import styled from "styled-components";

import { SecondaryText, Support } from "@src/store/styled/components";
import { Container } from "@src/store/styled/components";

import { Logo } from "@cmp/UI/Logo";

const Footer = () => {
  return (
    <>
      <Footer.Footer>
        <Container>
          <Logo title="Твой" toTitle="успех" />
          <SecondaryText style={{ margin: "5px 0 10px 0" }}>© Copyright 2022 Натали - партнер Oriflame</SecondaryText>
          <Support style={{ margin: "0 10px 0 0" }} href="mailto:nmang2103@mail.ru">
            nmang2103@mail.ru
          </Support>
          <Support href="tel:+79099223801">+7 (909) 922-38-01</Support>
        </Container>
      </Footer.Footer>
    </>
  );
};

Footer.Footer = styled.footer`
  background-color: ${props => props.theme.colors.surface};
`;

export { Footer };
