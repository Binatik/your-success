import React from "react";
import styled from "styled-components";

const Phone = ({phone}) => {
  return (
    <>
      <Phone.Phone style={{ margin: "0 50px 0 0" }} href="tel:+79099223801">
        {phone}
      </Phone.Phone>
    </>
  );
};

Phone.Phone = styled.a`
  color: ${props => props.theme.colors.secondary};

  ${props => props.theme.fontStyle.paragraph};
`;

export { Phone };
