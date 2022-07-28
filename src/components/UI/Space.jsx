import React, { useMemo } from "react";
import styled from "styled-components";

const Space = ({ type, size, isSpaceLeft, children }) => {
  const BIG = "big";
  const SMALL = "small";
  const MIN = "min";

  const padding = useMemo(() => {
    if (size === BIG) return "40px";
    if (size === SMALL) return "20px";
    if (size === MIN) return "10px";
  }, [size]);

  const margin = useMemo(() => {
    if (size === BIG) return "40px";
    if (size === SMALL) return "20px";
    if (size === MIN) return "10px";
  }, [size]);

  return (
    <>
      {type === "p" ? <Space.Padding padding={padding} isSpaceLeft={isSpaceLeft}>{children}</Space.Padding> : null}
      {type === "m" ? <Space.Margin margin={margin}>{children}</Space.Margin> : null}
    </>
  );
};

export { Space };

// __StyledComponents

Space.Space = styled.div`
  position: relative;
  padding-left: ${props => props.isSpaceLeft ? "20px" : "0"};
  z-index: 5;

  @media ${props => props.theme.desktopFirst.tablet} {
    padding-left: ${props => props.isSpaceLeft && "0"};
  }
`

Space.Padding = styled(Space.Space)`
  padding-top: ${props => props.padding && props.padding};
  padding-bottom: ${props => props.padding && props.padding};
`;

Space.Margin = styled(Space.Space)`
  margin-top: ${props => props.margin && props.margin};
  margin-bottom: ${props => props.margin && props.margin};
`;
