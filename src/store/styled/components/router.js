import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const RouterNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  ${props => props.theme.fontStyle.link};
`;

export const PrimaryRouterLink = styled(RouterNavLink)`
  color: ${props => (props.color ? props.color : props.theme.colors.primary)};

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  &.active {
    color: ${props => props.theme.colors.secondary};
  }
`;

const RouterButtonLink = styled(RouterNavLink)`
  border-radius: 3px;
  padding: 10px 25px;
  box-shadow: 0px 5px 150px 2px ${props => props.theme.colors.surface};
`;

export const PrimaryRouterButtonLink = styled(RouterButtonLink)`
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.primary};

  &:hover {
    background-color: ${props => props.theme.colors.surface};
  }
`;
