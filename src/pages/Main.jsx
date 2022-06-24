import React from "react";
import styled from "styled-components";

import animate from "@src/video/particle.mp4";

import { VideoBanner } from "@cmp/UI/VideoBanner";
import { Link } from "@cmp/UI/Link";
import { Section } from "@cmp/UI/Section";

const Title = styled.h1`
  margin: 0 0 15px 0;
  color: ${props => props.theme.colors.secondary};
  text-align: center;

  ${props => props.theme.fontStyle.title}
`;

const Text = styled.p`
  color: ${props => props.theme.colors.secondary};

  ${props => props.theme.fontStyle.paragraph};
`;

const LinkContainer = styled.div`
  margin: 30px 0 0 0;
`;

const Main = () => {
  return (
    <>
      <VideoBanner video={animate}>
        <Title>О бо мне</Title>
        <Text>Я - Наталья - интернет - предприниматель. Работаю только через интернет, удалённо.</Text>
        <Text>__</Text>
        <Text>Моя цель - научить вас зарабатывать через интернет от 30 000 рублей и более. </Text>
        <LinkContainer>
          <Link />
        </LinkContainer>
      </VideoBanner>
      <Section bg='#fff' title='Что делать &mdash;' />
    </>
  );
};

export { Main };
