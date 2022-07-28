import styled from "styled-components";

const Link = styled.a`
  display: block;
  height: min-content;
  font-weight: 400;
  z-index: 3;
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
    color: ${props => props.theme.colors.surface};
  }

  @media ${props => props.theme.desktopFirst.tablet} {
    color: ${props => (props.mobileColor ? props.mobileColor : props.theme.colors.secondary)};
  }
`;

export const SurfaceLink = styled(Link)`
  color: ${props => props.theme.colors.surface};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const ButtonLink = styled(Link)`
  text-transform: uppercase;
  border-radius: 3px;
  padding: 10px 35px;
  ${props => props.theme.fontStyle.button};
`;

export const PrimaryButtonLink = styled(ButtonLink)`
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.primary};

  &:hover {
    background-color: ${props => props.theme.colors.surface};
  }
`;

export const SecondaryButtonLink = styled(ButtonLink)`
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.secondary};

  &:hover {
    background-color: ${props => props.theme.colors.surface};
    color: ${props => props.theme.colors.secondary};
  }
`;
