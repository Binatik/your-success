import React from "react";
import styled from "styled-components";

import { Container } from "@src/store/styled/components/others";
import { SurfaceTitle } from "@src/store/styled/components/titles";

import { GridItems } from "./GridItems";

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px -15px 10px -15px;
`;

const SectionTitle = styled(SurfaceTitle)`
  text-align: center;
  color: ${props => props.color};

  ${props => props.theme.fontStyle.sectionTitle};
`;

const Section = ({ articles, titleColor, title, bg, anchor, children, ...props }) => {
  const items = (
    <Items>
      {articles.map(element => (
        <GridItems key={element.id} element={element} {...props} />
      ))}
    </Items>
  );

  return (
    <>
      <Section.Section id={anchor} bg={bg}>
        <Container>
          <SectionTitle color={titleColor}>{title}</SectionTitle>
          {articles.length !== 0 ? items : null}
          {children}
        </Container>
      </Section.Section>
    </>
  );
};

Section.Section = styled.section`
  padding: 80px 0;
  background: ${props => props.bg};
`;

export { Section };
