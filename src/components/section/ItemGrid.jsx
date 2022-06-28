import React from "react";
import styled from "styled-components";

import { PrimarySubTitle, PrimaryText } from "@src/store/styled/components";

const Grid = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: center;
  flex: 0 0 ${props => props.theme.grid.col3};
  margin: 0 0 30px 0;

  @media ${props => props.theme.desktopFirst.desktop} {
    flex: 0 0 ${props => props.theme.grid.col2};
  }

  @media ${props => props.theme.desktopFirst.tablet} {
    flex: 1 1 ${props => props.theme.grid.col1};
  }
`;

const Item = styled.div`
  width: 350px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: ${props => props.theme.colors.primary + "00030"} 0px 7px 29px 0px;
  background-color: ${props => props.theme.colors.secondary};
  height: 100%;
  border-radius: 5px;

  @media ${props => props.theme.desktopFirst.tablet} {
    width: 100%;
  }
`;

const ItemGrid = ({ element }) => {
  const { title, texts } = element;
  return (
    <>
      <Grid>
        <Item>
          <PrimarySubTitle>{title}</PrimarySubTitle>
          {texts.map((text, index) => (
            <PrimaryText style={{ margin: "5px 0", fontWeight: 400 }} key={index}>
              {text}
            </PrimaryText>
          ))}
        </Item>
      </Grid>
    </>
  );
};

export { ItemGrid };
