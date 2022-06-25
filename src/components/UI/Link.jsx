import React from "react";
import styled from "styled-components";

const Link = ({ path, title }) => {
  return (
    <>
      <Link.Link href={path}>{title}</Link.Link>
    </>
  );
};

Link.Link = styled.a`
  display: inline-block;
  border-radius: 3px;
  font-weight: 400;
  padding: 10px;
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.background};
  box-shadow: 0px 5px 80px 2px ${props => props.theme.colors.background};
  transition: background 0.1s;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }

  ${props => props.theme.fontStyle.links};
`;

export { Link };
