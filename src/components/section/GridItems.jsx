import React, { useMemo } from "react";
import styled from "styled-components";

import { Grid } from "@src/store/styled/components/others";

const ItemGrid = styled.div`
  position: relative;
  overflow: hidden;
  width: ${props => props.size};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: ${props => props.theme.colors.primary + "30"} 0px 7px 29px 0px;
  background-color: ${props => props.theme.colors.secondary};
  height: 100%;
  border-radius: 5px;

  @media ${props => props.theme.desktopFirst.tablet} {
    width: 100%;
  }
`;

const Index = styled.span`
  user-select: none;
  color: #00000008;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 70rem;
  z-index: 1;
`;

const GridItems = ({ Component, ComponentProps, element, isDecor, colSize, grid }) => {
  const col = useMemo(() => {
    return grid ? grid : "col3";
  }, [grid]);

  const size = useMemo(() => {
    if (!colSize) return "350px";
    else if (colSize === "big") return "350px";
    else if (colSize === "auto") return "100%";
  }, [colSize]);

  return (
    <>
      <Grid col={col}>
        <ItemGrid size={size}>
          {isDecor && <Index isIndex={isDecor}>{element.id}</Index>}
          <Component {...ComponentProps} element={element} />
        </ItemGrid>
      </Grid>
    </>
  );
};

export { GridItems };
