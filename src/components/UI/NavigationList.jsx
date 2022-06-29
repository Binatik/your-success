import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { getBurgerState } from "@src/store/redux";
import { close } from "@src/store/redux/slice/burger";
import { NavigationLink } from "@src/store/styled/components";

const Navigation = styled.nav`
  z-index: 3;
  position: relative;
  flex: 1 1 auto;

  @media ${props => props.theme.desktopFirst.tablet} {
    margin: 30px 0 0 0;
    visibility: ${props => (props.isAciveBurger ? "visible" : "hidden")};
    transform: translate(-50%, 0) ${props => (props.isAciveBurger ? "scale(1)" : "scale(0)")};
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transition: transform 0.9s, visibility 0.1s;
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
    margin: 0 0 10px 0;
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
            <Item key={id}>
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
