import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  border-radius: 3px;
  font-weight: 400;
  padding: 10px 25px;
  box-shadow: 0px 5px 150px 2px ${props => props.theme.colors.surface};
  transition: background 0.2s;
  ${props => props.theme.fontStyle.link};
`;

export const PrimaryButton = styled(Button)`
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.surface};

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;
