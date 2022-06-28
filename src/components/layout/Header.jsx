import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Container, Phone } from "@src/store/styled/components";
import { initNavigation } from "@src/store/state";
import { getBurgerState } from "@src/store/redux";

import { Burger } from "@cmp/UI/Burger";
import { Logo } from "@cmp/UI/Logo";
import { NavigationList } from "@cmp/UI/NavigationList";

const RowContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media ${props => props.theme.desktopFirst.tablet} {
    justify-content: space-between;
  }
`;

const Header = () => {
  const { toggle: isAciveBurger } = useSelector(getBurgerState);

  const [links, setLinks] = useState(initNavigation);

  return (
    <>
      <Header.Header>
        <RowContainer>
          <div style={{ margin: "0 30px 0 0",  zIndex: 3 }}>
            <Logo title="Бизнес-проект" />
          </div>
          <NavigationList links={links} />
          <Phone style={{ margin: "0 40px 0 0" }} href="tel:+79099223801">
            +7 (909) 922-38-01
          </Phone>
          <Burger />
        </RowContainer>
      </Header.Header>
    </>
  );
};

Header.Header = styled.header`
  position: fixed;
  width: 100%;
  left: 0px;
  top: 0px;
  padding: 20px 0;
  background-color: ${props => props.theme.colors.surface};
  z-index: 11;
`;

export { Header };
