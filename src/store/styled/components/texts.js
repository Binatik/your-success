import styled from "styled-components";

export const Text = styled.p`
  ${props => props.theme.fontStyle.paragraph};
`;

export const PrimaryText = styled(Text)`
  color: ${props => props.theme.colors.primary};
`;

export const SurfaceText = styled(Text)`
  color: ${props => props.theme.colors.surface};
`;

export const SecondaryText = styled(Text)`
  color: ${props => props.theme.colors.secondary};
`;