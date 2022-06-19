import React from "react";
import styled from "styled-components";


const Link = () => {
  const path = 'https://docs.google.com/forms/d/e/1FAIpQLSd2WqntX_EK0EiDuxI8Tf_W-t_HiWmsy_sUPpjTUULIQTON-Q/viewform';
  return (
    
    <>
      <Link.Link href={path}>Заполнить анкету</Link.Link>
    </>
  );
};

Link.Link = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 10px;
  color: #fff;
  background-color: ${props => props.theme.colors.background};
  transition: background 0.1s;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }


  ${props => props.theme.fontStyle.links};
`;

export { Link };
