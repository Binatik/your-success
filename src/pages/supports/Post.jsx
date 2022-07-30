import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { getPostsState } from "@src/store/redux";
import { Center, Container } from "@src/store/styled/components/others";
import { SecondaryRouterButtonLink } from "@src/store/styled/components/router";
import { removeActivePost } from "@src/store/redux/slice/posts";
import { scrollStartPage } from "@src/store/helpers/scrollStartPage";

import { Card } from "@cmp/cards/Card";
import { RouterCard } from "@cmp/cards/RouterCard";
import { SurfaceSectionTitle } from "@src/store/styled/components/titles";
import { Section } from "@cmp/UI/Section";
import { Space } from "@cmp/UI/Space";
import { FlexGrid } from "@cmp/grid/FlexGrid";

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
          <Card element={{ title, paragraphs, paths }} />
        </BeatyContainer>
        <Section anchor="post" color="#002137">
          <Center>
            <SurfaceSectionTitle>Другие темы &mdash;</SurfaceSectionTitle>
            <Space type="m" size="small">
            <FlexGrid grid="col1" size="auto" data={filteredSupports} renderCard={element => <RouterCard element={element} />} />
            </Space>
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
