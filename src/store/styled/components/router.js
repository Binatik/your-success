import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const RouterNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  z-index: 3;
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

export const SecondaryRouterLink = styled(RouterNavLink)`
  color: ${props => (props.color ? props.color : props.theme.colors.secondary)};

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  &.active {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const SurfaceRouterLink = styled(RouterNavLink)`
  color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.surface};
  }

  &.active {
    color: ${props => props.theme.colors.surface};
  }
`;

const RouterButtonLink = styled(RouterNavLink)`
  text-transform: uppercase;
  border-radius: 3px;
  padding: 10px 25px;
  ${props => props.theme.fontStyle.button};
`;

export const PrimaryRouterButtonLink = styled(RouterButtonLink)`
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.primary};

  &:hover {
    background-color: ${props => props.theme.colors.surface};
  }
`;

export const SecondaryRouterButtonLink = styled(RouterButtonLink)`
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.secondary};

  &:hover {
    background-color: ${props => props.theme.colors.surface};
    color: ${props => props.theme.colors.secondary};
  }
`;
