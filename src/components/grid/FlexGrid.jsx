import React, { useMemo } from "react";
import styled from "styled-components";

const FlexGrid = ({ grid, isDecor, size, data, Card, propsCard }) => {
  const maxWidth = useMemo(() => {
    if (size === "big") return "1200px";
    if (size === "small") return "1000px";
    if (size === "auto") return "100%";
  }, [size]);

  return (
    <>
      <GridRoot size={maxWidth}>
        {data.map(element => (
          <Grid key={element.id} col={grid}>
            {isDecor && <Index isIndex={isDecor}>{element.id}</Index>}
            <Card element={element} {...propsCard}></Card>
          </Grid>
        ))}
      </GridRoot>
    </>
  );
};

export { FlexGrid };

// __StyledComponents

const GridRoot = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: ${props => props.size};
`;

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

const Index = styled.span`
  user-select: none;
  color: #00000006;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 150rem;
  z-index: 1;
`;
