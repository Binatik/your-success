import React, { useMemo } from "react";
import styled from "styled-components";

import { Grid } from "@src/store/styled/components/others";

const Item = styled.div`
  position: relative;
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
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

const GridWrapper = ({ Component, ComponentProps, element, isDecor, grid }) => {
  const col = useMemo(() => {
    return grid ? grid : "col3";
  }, [grid]);

  return (
    <>
      <Grid col={col}>
        <Item>
          {isDecor && <Index isIndex={isDecor}>{element.id}</Index>}
          <Component {...ComponentProps} element={element} />
        </Item>
      </Grid>
    </>
  );
};

export { GridWrapper };
