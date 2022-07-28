import React from "react";
import styled from "styled-components";

import { PrimaryText } from "@src/store/styled/components/texts";
import { SurfaceTitle } from "@src/store/styled/components/titles";

const Logo = ({ title, toTitle }) => {
  return (
    <>
      <Logo.Logo href="#">
        <PrimaryText style={{ margin: "0 10px 0 0" }}>{title}</PrimaryText>
        <SurfaceTitle>{toTitle}</SurfaceTitle>
      </Logo.Logo>
    </>
  );
};

// __StyledComponents

Logo.Logo = styled.a`
  z-index: 5;
  margin: 0 50px 0 0;
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
