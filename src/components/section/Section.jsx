import React, { useMemo } from "react";
import styled from "styled-components";

import { Container } from "@src/store/styled/components/others";
import { SurfaceTitle } from "@src/store/styled/components/titles";

import { GridWrapper } from "./GridWrapper";

const Section = ({ articles, title, bg, anchor, colSize, children, ...props }) => {
  const size = useMemo(() => {
    if (!colSize) return "1200px";
    else if (colSize === "big") return "1200px";
    else if (colSize === "small") return "1000px";
    else if (colSize === "auto") return "100%";
  }, [colSize]);

  const gridRoot = (
    <GridRoot size={size}>
      {articles.map(element => (
        <GridWrapper key={element.id} element={element} {...props} />
      ))}
      {children}
    </GridRoot>
  );

  return (
    <>
      <Section.Section id={anchor} bg={bg}>
        <Container>
          <SectionTitle>{title}</SectionTitle>
          {gridRoot}
        </Container>
      </Section.Section>
    </>
  );
};

// __StyledComponents

Section.Section = styled.section`
  padding: 80px 0;
  background: ${props => props.bg};
`;

const GridRoot = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: ${props => props.size};
  margin: 30px auto;
`;

const SectionTitle = styled(SurfaceTitle)`
  text-align: center;

  ${props => props.theme.fontStyle.sectionTitle};
`;

export { Section };
