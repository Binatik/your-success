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
  align-items: center;
  flex-wrap: wrap;

  @media ${props => props.theme.desktopFirst.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex: 1 1 auto;

  @media ${props => props.theme.desktopFirst.phone} {
    flex-direction: column;
    align-items: flex-start;
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
      path: "/support",
      title: "Контакты",
    },
  ]);

  return (
    <>
      <Header.Header>
        <RowContainer>
          <Inner>
            <Logo title="Бизнес-проект" />
            <Phone phone="+7 (909) 922-38-01" />
          </Inner>
          <NavigationList links={links} />
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
