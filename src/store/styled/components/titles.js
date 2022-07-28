import styled from "styled-components";

export const Title = styled.h2`
  font-family: "Montserrat", sans-serif;
  z-index: 8;
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

export const SurfaceSectionTitle = styled(Title)`
  color: ${props => props.theme.colors.surface};

  ${props => props.theme.fontStyle.sectionTitle}
`;