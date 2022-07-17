import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const RouterHashLink = styled(HashLink)`
  display: inline-block;
  border-radius: 3px;
  font-weight: 400;
  padding: 10px 25px;
  box-shadow: 0px 5px 80px 2px ${props => props.theme.colors.surface};
  transition: background 0.2s;
  ${props => props.theme.fontStyle.link};
`;

export const PrimaryHashLink = styled(RouterHashLink)`
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.surface};

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

export const RouterNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  transition: color 0.2s;
  ${props => props.theme.fontStyle.link};
`;

export const PrimaryNavLink = styled(RouterNavLink)`
  color: ${props => (props.color ? props.color : props.theme.colors.primary)};

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  &.active {
    color: ${props => props.theme.colors.secondary};
  }
`;
