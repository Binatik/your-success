import React from "react";
import styled from "styled-components";

const Title = styled.span`
  color: #000;
  text-transform: uppercase;
`;

const Logo = ({ title }) => {
  return (
    <>
      <Logo.Logo href="#">
        <Title>{title}</Title>
      </Logo.Logo>
    </>
  );
};

Logo.Logo = styled.a`
  flex: 0 0 auto;
  margin: 5px 20px 5px 0;
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 5px;
  z-index: 3;
`;

export { Logo };
