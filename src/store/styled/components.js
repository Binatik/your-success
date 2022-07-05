import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1310px;
  margin: 0 auto;
  padding: 20px 15px;
`;

export const Center = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

export const Link = styled.a`
  display: inline-block;
  border-radius: 3px;
  font-weight: 400;
  padding: 10px;
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.surface};
  box-shadow: 0px 5px 80px 2px ${props => props.theme.colors.surface};
  transition: background 0.1s;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }

  ${props => props.theme.fontStyle.link};
`;

export const PrimaryText = styled.p`
  color: ${props => props.theme.colors.primary};

  ${props => props.theme.fontStyle.paragraph};
`;

export const SecondaryText = styled.p`
  color: ${props => props.theme.colors.secondary};

  ${props => props.theme.fontStyle.paragraph};
`;

export const PrimaryTitle = styled.h2`
  color: ${props => props.theme.colors.primary};

  ${props => props.theme.fontStyle.title}
`;

export const SurfaceTitle = styled.h2`
  color: ${props => props.theme.colors.surface};

  ${props => props.theme.fontStyle.title}
`;

export const SecondaryTitle = styled.h2`
  color: ${props => props.theme.colors.secondary};
  text-align: center;

  ${props => props.theme.fontStyle.title}
`;

export const PrimarySubTitle = styled.h3`
  color: ${props => props.theme.colors.primary};

  ${props => props.theme.fontStyle.title};
`;

export const Phone = styled.a`
  color: ${props => props.theme.colors.secondary};
  z-index: 3;

  ${props => props.theme.fontStyle.paragraph};
`;

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.secondary};
  }

  &.active {
    color: ${props => props.theme.colors.secondary};
  }

  @media ${props => props.theme.desktopFirst.tablet} {
    font-size: 3rem;
  }

  ${props => props.theme.fontStyle.link};
`;

export const BurgerLine = styled.path`
  fill: ${props => props.theme.colors.primary};
  transform-origin: 50%;
  transition: transform 400ms;
  stroke: ${props => props.theme.colors.primary};
  stroke-width: 2;
`;
