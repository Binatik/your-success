import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { getBurgerState } from "@src/store/redux";
import { close } from "@src/store/redux/slice/burger";
import { NavigationLink } from "@src/store/styled/components";

const Navigation = styled.nav`
  z-index: 3;
  flex: 1 1 auto;

  @media ${props => props.theme.desktopFirst.tablet} {
    position: fixed;
    overflow: auto;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: transparent;
    padding: 50px 0;
    transform: ${props => (props.isAciveBurger ? "translateY(60px)" : "translateY(-100%)")};
    transition: transform 0.5s;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media ${props => props.theme.desktopFirst.tablet} {
    flex-direction: column;
    align-items: center;
    overflow: auto;
  }
`;

const Item = styled.li`
  margin: 0 20px 0 0;

  @media ${props => props.theme.desktopFirst.tablet} {
    visibility: ${props => (props.isAciveBurger ? "visible" : "hidden")};
    transform: ${props => (props.isAciveBurger ? "scale(1)" : "scale(0)")};
    margin: 0 0 10px 0;
    transition: transform 0.2s;
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
      <Navigation isAciveBurger={isAciveBurger}>
        <List>
          {links.map(({ id, path, title }) => (
            <Item isAciveBurger={isAciveBurger} key={id}>
              <NavigationLink onClick={closeBurger} to={path}>
                {title}
              </NavigationLink>
            </Item>
          ))}
        </List>
      </Navigation>
    </>
  );
};

export { NavigationList };
