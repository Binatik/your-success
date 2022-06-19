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
  flex: 1 1 auto;
  margin: 0 50px 0 0;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 5px;
  z-index: 3;
`;

export { Logo };
