import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Container } from "@src/store/styled/styleComponents";

import { getBurgerState } from "@src/store/redux";

import { Burger } from "@cmp/UI/Burger";
import { Logo } from "@cmp/UI/Logo";
import { NavigationList } from "@cmp/UI/NavigationList";
import { Phone } from "@cmp/UI/Phone";

const RowContainer = styled(Container)`
  display: flex;
  align-items: ${props => (props.isAciveBurger ? "flex-start" : "center")};
  flex-wrap: wrap;

  @media ${props => props.theme.desktopFirst.tablet} {
    flex-direction: ${props => (props.isAciveBurger ? "column" : "row")};
  }
`;

const Header = () => {
  const { toggle: isAciveBurger } = useSelector(getBurgerState);

  const [links, setLinks] = useState([
    {
      id: 0,
      path: "/",
      title: "Главная",
    },
    {
      id: 1,
      path: "started",
      title: "Дополнительная",
    },
    {
      id: 2,
      path: "started",
      title: "Дополнительная2",
    },
  ]);

  return (
    <>
      <Header.Header>
        <RowContainer isAciveBurger={isAciveBurger}>
          <Logo title="Бизнес-проект" />
          <NavigationList links={links} />
          <Phone phone="+7 (909) 922-38-01" />
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
  padding: 15px 0;
  background-color: ${props => props.theme.colors.background};
  z-index: 11;
`;

export { Header };
