import styled from "styled-components";

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

export const Space = styled.div`
  
`;
