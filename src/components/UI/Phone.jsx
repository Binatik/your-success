import React from "react";
import styled from "styled-components";

const Phone = ({ phone }) => {
  return (
    <>
      <Phone.Phone href="tel:+79099223801">{phone}</Phone.Phone>
    </>
  );
};

Phone.Phone = styled.a`
  color: ${props => props.theme.colors.secondary};
  z-index: 3;

  ${props => props.theme.fontStyle.paragraph};
`;

export { Phone };
