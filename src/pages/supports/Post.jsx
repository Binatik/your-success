import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { getPostsState } from "@src/store/redux";
import { Center, Container } from "@src/store/styled/components/others";
import { SecondaryRouterButtonLink } from "@src/store/styled/components/router";
import { removeActivePost } from "@src/store/redux/slice/posts";
import { scrollStartPage } from "@src/store/helpers/scrollStartPage";

import { GridWrapper } from "@cmp/section/GridWrapper";
import { MainCard } from "@cmp/UI/MainCard";
import { Section } from "@cmp/section/Section";
import { RouterCard } from "@cmp/UI/RouterCard";

const Post = () => {
  const dispatch = useDispatch();
  const { supports, filteredSupports } = useSelector(getPostsState);
  const { id, title } = useParams();

  const { paragraphs, paths } = supports[id];

  useEffect(() => {
    dispatch(removeActivePost({ id }));
  }, [id]);

  return (
    <>
      <DuestionWrapper>
        <BeatyContainer>
          <GridWrapper
            Component={MainCard}
            ComponentProps={{ isCenter: false, isGrow: false }}
            element={{ title, paragraphs, paths }}
            isDecor={false}
            grid="col1"
          />
        </BeatyContainer>
        <Section
          Component={RouterCard}
          ComponentProps={{ isCenter: false, isGrow: false }}
          grid="col1"
          colSize="small"
          anchor="tasks"
          articles={filteredSupports}
          bg="#002137"
          title="Другие темы &mdash;"
        >
          <Center>
            <SecondaryRouterButtonLink onClick={scrollStartPage} to="/supports">
              Вернуться в поддержку ➜
            </SecondaryRouterButtonLink>
          </Center>
        </Section>
      </DuestionWrapper>
    </>
  );
};

// __StyledComponents

const DuestionWrapper = styled.div`
  padding: 50px 0;
  background-color: ${props => props.theme.colors.primary};
  min-height: 810px;
`;

const BeatyContainer = styled(Container)`
  max-width: 800px;
`;

export { Post };
