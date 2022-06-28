import React from "react";
import styled from "styled-components";

import { PrimaryText } from "@src/store/styled/components";

const Logo = ({ title }) => {
  return (
    <>
      <Logo.Logo href="#">
        <PrimaryText>{title}</PrimaryText>
      </Logo.Logo>
    </>
  );
};

Logo.Logo = styled.a`
  display: flex;
  flex: 0 0 auto;
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 5px;
`;

export { Logo };
