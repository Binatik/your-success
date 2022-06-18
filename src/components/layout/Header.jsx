import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { Container } from "@src/store/styled/styleComponents";

import { Burger } from "@cmp/UI/Burger";

const Logo = styled.a`
  flex: 1 1 auto;
  margin: 0 30px 0 0;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 5px;
`;

const Title = styled.span`
  color: #000;
  text-transform: uppercase;
`;

const RowContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Item = styled.li`
  margin: 0 20px 0 0;
`;

const Navigation = styled.nav`
  flex: 1 1 auto;

  @media ${props => props.theme.desktopFirst.tablet} {
    display: none;
  }
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
  return (
    <>
      <Header.header>
        <RowContainer>
          <Logo href="#">
            <Title>Natali-blog</Title>
          </Logo>
          <Navigation>
            <List>
              <Item>
                <Link {...props} to="/">
                  Главная
                </Link>
              </Item>
              <Item>
                <Link {...props} to="started">
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
  position: relative;
  padding: 15px 0;
  background-color: ${props => props.theme.colors.background};
`;

export { Header };
