import React from "react";
import styled from "styled-components";

import { PrimaryText, SurfaceTitle } from "@src/store/styled/components";

const Logo = ({ title, toTitle }) => {

  return (
    <>
      <Logo.Logo href="#">
        <PrimaryText style={{margin: "0 10px 0 0"}}>{title}</PrimaryText>
        <SurfaceTitle>{toTitle}</SurfaceTitle>
      </Logo.Logo>
    </>
  );
};

Logo.Logo = styled.a`
  margin: 10px 30px 10px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 5px;
`;

export { Logo };
