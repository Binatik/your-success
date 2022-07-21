import styled from "styled-components";

export const Text = styled.p`
  position: relative;
  z-index: 3;
  ${props => props.theme.fontStyle.paragraph};
`;

export const PrimaryText = styled(Text)`
  color: ${props => props.theme.colors.primary};
`;

export const SecondaryText = styled(Text)`
  color: ${props => props.theme.colors.secondary};
`;

export const SurfaceText = styled(Text)`
  color: ${props => props.theme.colors.surface};
`;