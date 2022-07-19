import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  display: block;
  border-radius: 3px;
  font-weight: 400;
  padding: 10px 35px;
  box-shadow: 0 0 200px #6633FF;
  transition: background 0.2s, color 0.2s;
  ${props => props.theme.fontStyle.link};
`;

export const PrimaryButton = styled(Button)`
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.primary};

  &:hover {
    background-color: ${props => props.theme.colors.surface};
  }
`;
