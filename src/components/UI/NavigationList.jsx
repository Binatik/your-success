import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { getBurgerState } from "@src/store/redux";
import { close } from "@src/store/redux/slice/burger";

const Navigation = styled.nav`
  flex: 1 1 auto;
  z-index: 3;
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

  @media ${props => props.theme.desktopFirst.tablet} {
    margin: 20px 0 0 0;
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

const NavigationList = ({ links }) => {
  const dispatch = useDispatch();

  const { toggle: isAciveBurger } = useSelector(getBurgerState);

  function closeBurger() {
    dispatch(close());
  }

  return (
    <>
      <Navigation>
        <List isAciveBurger={isAciveBurger}>
          {links.map(({ id, path, title }) => (
            <Item key={id}>
              <Link onClick={closeBurger} to={path}>
                {title}
              </Link>
            </Item>
          ))}
        </List>
      </Navigation>
    </>
  );
};

export { NavigationList };
