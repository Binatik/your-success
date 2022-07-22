import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { getPostsState } from "@src/store/redux";
import { Center, Container } from "@src/store/styled/components/others";
import { SecondaryRouterButtonLink } from "@src/store/styled/components/router";

import { GridItems } from "@cmp/section/GridItems";
import { MainCard } from "@cmp/UI/MainCard";
import { Section } from "@cmp/section/Section";
import { RouterCard } from "@cmp/UI/RouterCard";

const DuestionWrapper = styled.div`
  padding: 50px 0;
  background-color: ${props => props.theme.colors.primary};
  min-height: 810px;
`;

const Post = () => {
  const { supports } = useSelector(getPostsState);
  const { id, title } = useParams();

  const { texts, paths } = supports[id];

  const location = useLocation();
  console.log(location);

  return (
    <>
      <DuestionWrapper>
        <Container>
          <GridItems
            Component={MainCard}
            ComponentProps={{ isCenter: false, isGrow: false }}
            element={{ title, texts, paths }}
            isDecor={false}
            colSize="auto"
            grid="col1"
          />
          <Section
            Component={RouterCard}
            ComponentProps={{ isCenter: false, isGrow: false }}
            grid="col1"
            colSize="auto"
            anchor="tasks"
            articles={supports}
            bg="#002137"
            title="Другие темы &mdash;"
          ></Section>
          <Center>
            <SecondaryRouterButtonLink to="/supports">Вернуться в поддержку ➜</SecondaryRouterButtonLink>
          </Center>
        </Container>
      </DuestionWrapper>
    </>
  );
};

export { Post };
