import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export const Container = styled.div`
  max-width: 1310px;
  margin: 0 auto;
  padding: 10px 15px;
`;

export const Center = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

export const PrimaryLink = styled.a`
  display: inline-block;
  border-radius: 3px;
  font-weight: 400;
  padding: 10px 25px;
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.surface};
  box-shadow: 0px 5px 80px 2px ${props => props.theme.colors.surface};
  transition: background 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }

  ${props => props.theme.fontStyle.link};
`;

export const PrimaryHashLink = styled(HashLink)`
  display: inline-block;
  border-radius: 3px;
  font-weight: 400;
  padding: 10px 25px;
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.surface};
  box-shadow: 0px 5px 80px 2px ${props => props.theme.colors.surface};
  transition: background 0.2s;

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
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.colors.primary};

  ${props => props.theme.fontStyle.title}
`;

export const SurfaceTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.colors.surface};

  ${props => props.theme.fontStyle.title}
`;

export const SecondaryTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.colors.secondary};
  text-align: center;

  ${props => props.theme.fontStyle.title}
`;

export const PrimarySubTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.colors.primary};

  ${props => props.theme.fontStyle.title};
`;

export const Support = styled.a`
  display: inline;
  color: ${props => props.theme.colors.secondary};
  transition: color 0.1s;

  ${props => props.theme.fontStyle.paragraph};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
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

export const Grid = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: center;
  flex: 0 0 ${props => props.theme.grid[props.col]};
  margin: 0 0 30px 0;

  @media ${props => props.theme.desktopFirst.desktop} {
    flex: 0 0 ${props => props.theme.grid.col2};
  }

  @media ${props => props.theme.desktopFirst.tablet} {
    flex: 1 1 ${props => props.theme.grid.col1};
  }
`;

export const BurgerLine = styled.path`
  fill: ${props => props.theme.colors.primary};
  transform-origin: 50%;
  transition: transform 400ms;
  stroke: ${props => props.theme.colors.primary};
  stroke-width: 7;
`;
