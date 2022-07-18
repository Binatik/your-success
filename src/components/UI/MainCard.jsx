import React from "react";
import styled from "styled-components";

import { Support } from "@src/store/styled/components/others";
import { PrimarySubTitle } from "@src/store/styled/components/subTitles";
import { PrimaryText } from "@src/store/styled/components/texts";

const PrimaryBeatyText = styled(PrimaryText)`
  margin: 10px 0;
  text-align: ${props => (props.isCenter ? "center" : "start")};
  flex-grow: ${props => (props.isGrow ? "1" : "0")};
  z-index: 3;
`;

const PrimaryBeatySubTitle = styled(PrimarySubTitle)`
  white-space: nowrap;
  border-bottom: 2px solid #00ccff;
  z-index: 3;
`;

const BeatySupport = styled(Support)`
  margin: 10px 0;
  padding: 10px 0;
  width: 100%;
  text-align: center;
  color: ${props => props.theme.colors.surface};
  border-top: 1px solid ${props => props.theme.colors.primary + "15"};
  z-index: 3;
`;

const MainCard = ({ isCenter, isGrow, element }) => {
  const { title, texts, paths } = element;

  const support = <BeatySupport href={paths[0]}>{paths[1]}</BeatySupport>;

  return (
    <>
      <PrimaryBeatySubTitle>{title}</PrimaryBeatySubTitle>
      {texts.map((text, index) => (
        <React.Fragment key={index}>
          <PrimaryBeatyText isCenter={isCenter} isGrow={isGrow}>
            {text}
          </PrimaryBeatyText>
          {paths.length !== 0 ? support : null}
        </React.Fragment>
      ))}
    </>
  );
};

export { MainCard };
