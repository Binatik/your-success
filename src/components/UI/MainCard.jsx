import React from "react";
import styled from "styled-components";

import { PrimarySubTitle } from "@src/store/styled/components/subTitles";
import { PrimaryText } from "@src/store/styled/components/texts";
import { SurfaceLink } from "@src/store/styled/components/links";

const PrimaryBeatySubTitle = styled(PrimarySubTitle)`
  text-align: ${props => (props.isCenter ? "center" : "start")};
  width: ${props => (props.isCenter ? "100%" : "auto")};
  padding: 10px 0;
  border-bottom: 2px solid ${props => props.theme.colors.surface};
  z-index: 3;
`;

const PrimaryBeatyText = styled(PrimaryText)`
  padding: 10px 0;
  width: ${props => (props.isCenter ? "100%" : "auto")};
  text-align: ${props => (props.isCenter ? "center" : "start")};
  flex-grow: ${props => (props.isGrow ? "1" : "0")};
  z-index: 3;
`;

const SurfaceBeatyLink = styled(SurfaceLink)`
  margin: 10px 0;
  padding: 10px 0;
  width: 100%;
  text-align: center;
  border-top: 1px solid ${props => props.theme.colors.primary + "15"};
  z-index: 3;
`;

const MainCard = ({ isCenter, isGrow, element }) => {
  const { title, texts, paths } = element;

  return (
    <>
      <PrimaryBeatySubTitle isCenter={isCenter}>{title}</PrimaryBeatySubTitle>
      {texts.map((text, index) => (
        <React.Fragment key={index}>
          <PrimaryBeatyText isCenter={isCenter} isGrow={isGrow}>
            {text}
          </PrimaryBeatyText>
          {paths.length !== 0 ? <SurfaceBeatyLink href={paths[0]}>{paths[1]}</SurfaceBeatyLink> : null}
        </React.Fragment>
      ))}
    </>
  );
};

export { MainCard };
