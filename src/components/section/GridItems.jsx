import React, { useMemo } from "react";
import styled from "styled-components";

import { Grid } from "@src/store/styled/components";

const ItemGrid = styled.div`
  width: ${props => props.size};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.isCenter ? "center" : "start")};
  box-shadow: ${props => props.theme.colors.primary + "30"} 0px 7px 29px 0px;
  background-color: ${props => props.theme.colors.secondary};
  height: 100%;
  border-radius: 5px;

  @media ${props => props.theme.desktopFirst.tablet} {
    width: 100%;
  }
`;

const GridItems = ({ Component, ComponentProps, element, isCenter, colSize, grid }) => {
  const col = useMemo(() => {
    return grid ? grid : "col3";
  }, [grid]);

  const size = useMemo(() => {
    if (!colSize) return "350px";
    else if (colSize === "big") return "350px";
    else if (colSize === "small") return "280px";
  }, [colSize]);

  return (
    <>
      <Grid col={col}>
        <ItemGrid size={size} isCenter={isCenter}>
          <Component {...ComponentProps} element={element} />
        </ItemGrid>
      </Grid>
    </>
  );
};

export { GridItems };
