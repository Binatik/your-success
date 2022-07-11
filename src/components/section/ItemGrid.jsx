import React, { useMemo } from "react";
import styled from "styled-components";

import { PrimarySubTitle, PrimaryText, Grid, Support } from "@src/store/styled/components";

const Item = styled.div`
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

const BeatySupport = styled(Support)`
  margin: 10px 0;
  padding: 10px 0;
  width: 100%;
  text-align: center;
  color: ${props => props.theme.colors.surface};
  border-top: 1px solid ${props => props.theme.colors.primary + "15"};
`;

const PrimaryBeatyText = styled(PrimaryText)`
  margin: 5px 0;
  text-align: ${props => (props.isCenter ? "center" : "start")};
  flex-grow: ${props => (props.isGrow ? "1" : "0")};
`;

const ItemGrid = ({ element, isCenter, colSize, grid }) => {
  const { title, texts, paths, isGrow } = element;

  const col = useMemo(() => {
    return grid ? grid : "col3";
  }, [grid]);

  const size = useMemo(() => {
    if (!colSize) return "350px";
    else if (colSize === "big") return "350px";
    else if (colSize === "small") return "280px";
  }, [colSize]);

  const support = <BeatySupport href={paths[0]}>{paths[1]}</BeatySupport>;

  return (
    <>
      <Grid col={col}>
        <Item size={size} isCenter={isCenter}>
          <PrimarySubTitle style={{ whiteSpace: "nowrap", borderBottom: "2px solid #00CCFF"}}>{title}</PrimarySubTitle>
          {texts.map((text, index) => (
            <React.Fragment key={index}>
              <PrimaryBeatyText isCenter={isCenter} isGrow={isGrow}>
                {text}
              </PrimaryBeatyText>
              {paths.length !== 0 ? support : null}
            </React.Fragment>
          ))}
        </Item>
      </Grid>
    </>
  );
};

export { ItemGrid };
