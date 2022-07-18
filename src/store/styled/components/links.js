import styled from "styled-components";

export const Link = styled.a`
  display: inline-block;
  border-radius: 3px;
  font-weight: 400;
  padding: 10px 25px;
  box-shadow: 0px 5px 150px 2px ${props => props.theme.colors.surface};
  transition: background 0.2s;
  ${props => props.theme.fontStyle.link};
`;

export const PrimaryLink = styled(Link)`
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.surface};

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;
