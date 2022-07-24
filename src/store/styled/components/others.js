import styled from "styled-components";

export const Grid = styled.div`
  padding: 0 20px 0 20px;
  margin: 20px 0;
  flex: 0 0 ${props => props.theme.grid[props.col]};

  @media ${props => props.theme.desktopFirst.desktop} {
    flex: 0 0 ${props => props.theme.grid.col2};
  }

  @media ${props => props.theme.desktopFirst.tablet} {
    flex: 1 1 ${props => props.theme.grid.col1};
    padding: 0;
  }
`;

export const BurgerLine = styled.path`
  fill: ${props => props.theme.colors.primary};
  transform-origin: 50%;
  transition: transform 400ms;
  stroke: ${props => props.theme.colors.primary};
  stroke-width: 7;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 30px 0 0 0;
  flex: 1 1 100%;
`;

export const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 10px 15px;
`;

export const FlexItems = styled.div`
  display: flex;
  min-width: 0;


  @media ${props => props.theme.desktopFirst.tablet} {
    flex-wrap: wrap;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50px;
`;
