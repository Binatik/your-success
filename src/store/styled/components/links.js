import styled from "styled-components";

const Link = styled.a`
  display: block;
  font-weight: 400;
  transition: background 0.2s, color 0.2s;
  ${props => props.theme.fontStyle.link};
`;

export const PrimaryLink = styled(Link)`
  color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.surface};
  }
`;

export const SecondaryLink = styled(Link)`
  color: ${props => props.theme.colors.secondary};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

export const SurfaceLink = styled(Link)`
  color: ${props => props.theme.colors.surface};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const ButtonLink = styled(Link)`
  border-radius: 3px;
  padding: 10px 35px;
  box-shadow: 0px 5px 150px 2px ${props => props.theme.colors.surface};
`;

export const PrimaryButtonLink = styled(ButtonLink)`
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.primary};

  &:hover {
    background-color: ${props => props.theme.colors.surface};
  }
`;

// primary: "#002137",
// secondary: "#F6F6F6",
// surface: "#00CCFF",
