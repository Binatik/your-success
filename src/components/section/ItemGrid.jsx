import React, { useMemo } from "react";
import styled from "styled-components";

import { PrimarySubTitle, PrimaryText, Grid } from "@src/store/styled/components";

const Item = styled.div`
  width: ${props => props.size};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.isCenter ? "center" : "start")};
  box-shadow: ${props => props.theme.colors.primary + "00030"} 0px 7px 29px 0px;
  background-color: ${props => props.theme.colors.secondary};
  height: 100%;
  border-radius: 5px;

  @media ${props => props.theme.desktopFirst.tablet} {
    width: 100%;
  }
`;

const ItemGrid = ({ element, isCenter, colSize, grid }) => {
  const { title, texts } = element;

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
        <Item size={size} isCenter={isCenter}>
          <PrimarySubTitle style={{whiteSpace: "nowrap"}}>{title}</PrimarySubTitle>
          {texts.map((text, index) => (
            <PrimaryText style={{ margin: "5px 0", fontWeight: 400, textAlign: isCenter ? "center" : "start" }} key={index}>
              {text}
            </PrimaryText>
          ))}
        </Item>
      </Grid>
    </>
  );
};

export { ItemGrid };
