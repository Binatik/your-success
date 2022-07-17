import styled from "styled-components";

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  ${props => props.theme.fontStyle.title}
`;

export const PrimaryTitle = styled(Title)`
  color: ${props => props.theme.colors.primary};
`;

export const SurfaceTitle = styled(Title)`
  color: ${props => props.theme.colors.surface};
`;

export const SecondaryTitle = styled(Title)`
  color: ${props => props.theme.colors.secondary};
`;