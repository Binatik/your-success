import styled from "styled-components";

export const SubTitle = styled.h3`
  font-family: "Montserrat", sans-serif;
  transition: color 0.2s;
  z-index: 3;
  ${props => props.theme.fontStyle.subTitle};
`;

export const PrimarySubTitle = styled(SubTitle)`
  color: ${props => props.theme.colors.primary};
`;

export const SurfaceSubTitle = styled(SubTitle)`
  color: ${props => props.theme.colors.surface};
`;

export const SecondarySubTitle = styled(SubTitle)`
  color: ${props => props.theme.colors.secondary};
`;
