import React from "react";
import {useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Container } from "@src/store/styled/styleComponents";

import { getBurgerState } from "@src/store/redux";
import { close } from "@src/store/redux/slice/burger";

import { Burger } from "@cmp/UI/Burger";


const Logo = styled.a`
  flex: 1 1 auto;
  margin: 0 50px 0 0;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 5px;
  z-index: 3;
`;

const Title = styled.span`
  color: #000;
  text-transform: uppercase;
`;

const RowContainer = styled(Container)`
  display: flex;
  align-items: ${props => (props.isAciveBurger ? "flex-start" : "center")};
  flex-wrap: wrap;

  @media ${props => props.theme.desktopFirst.tablet} {
    flex-direction: ${props => (props.isAciveBurger ? "column" : "row")};
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media ${props => props.theme.desktopFirst.tablet} {
    margin: 10px 0 0 0;
    display: ${props => (props.isAciveBurger ? "block" : "none")};
  }
`;

const Item = styled.li`
  margin: 0 20px 0 0;
`;

const Navigation = styled.nav`
  flex: 1 1 auto;
  z-index: 3;
`;

const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: ${props => props.theme.colors.primary};

  ${props => props.theme.fontStyle.links};

  &.active {
    color: #fff;
  }
`;

const Header = ({ ...props }) => {
  const { toggle: isAciveBurger } = useSelector(getBurgerState);
  const dispatch = useDispatch();

  function closeBurger() {
    dispatch(close())
  }

  return (
    <>
      <Header.header>
        <RowContainer isAciveBurger={isAciveBurger}>
          <Logo href="#">
            <Title>Бизнес-проект</Title>
          </Logo>
          <Navigation>
            <List isAciveBurger={isAciveBurger}>
              <Item>
                <Link onClick={closeBurger} {...props} to="/">
                  Главная
                </Link>
              </Item>
              <Item>
                <Link onClick={closeBurger} {...props} to="started">
                  Дополнительная
                </Link>
              </Item>
            </List>
          </Navigation>
          <Burger />
        </RowContainer>
      </Header.header>
    </>
  );
};

Header.header = styled.header`
  position: fixed;
  width: 100%;
  left: 0px;
  top: 0px;
  padding: 15px 0;
  background-color: ${props => props.theme.colors.background};
  z-index: 11;
`;

export { Header };
