import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { initSupportCatalog } from "@src/store/state";

import { GridItems } from "@cmp/section/GridItems";
import { MainCard } from "@cmp/UI/MainCard";
import { Container } from "@src/store/styled/components/others";
import { PrimaryRouterButtonLink, SecondaryRouterLink } from "@src/store/styled/components/router";
import { SecondaryButtonLink } from "@src/store/styled/components/links";

const DuestionWrapper = styled.div`
  padding: 50px 0;
  background-color: ${props => props.theme.colors.primary};
  min-height: 700px;
`;

const CatalogCard = () => {
  const [catalog, setCatalog] = useState(initSupportCatalog);

  const { id, title } = useParams();
  const { texts, paths } = catalog[id];
  return (
    <>
      <DuestionWrapper>
        <Container>
          <GridItems
            Component={MainCard}
            ComponentProps={{ isCenter: false, isGrow: false }}
            element={{ title, texts, paths }}
            isDecor={false}
            colSize="big"
            grid="col1"
          />
          <SecondaryRouterLink to="/supports">Назад</SecondaryRouterLink>
        </Container>
      </DuestionWrapper>
    </>
  );
};

export { CatalogCard };
