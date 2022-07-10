import React from "react";
import styled from "styled-components";

import { Container, SurfaceTitle } from "@src/store/styled/components";
import { ItemGrid } from "./ItemGrid";

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 50px -15px 10px -15px;
`;

const Section = ({ title, bg, articles, anchor, isCenter, grid, colSize, children }) => {
  const items = (
    <Items>
      {articles.map(element => (
        <ItemGrid key={element.id} element={element} isCenter={isCenter} colSize={colSize} grid={grid} />
      ))}
    </Items>
  );

  return (
    <>
      <Section.Section id={anchor} bg={bg}>
        <Container>
          <SurfaceTitle style={{ textAlign: "center" }}>{title}</SurfaceTitle>
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
