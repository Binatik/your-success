import React from "react";
import styled from "styled-components";

import { Container } from "@src/store/styled/styleComponents";
import { Link } from "./Link";

const Сopyright = styled.span`
  color: #fff;
  margin: 0 0 15px 0;

  ${props => props.theme.fontStyle.span}

`;

const VideoAnimate = styled.video`
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const FlexСontainer = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
  z-index: 3;
`;

const Title = styled.h1`
  margin: 0 0 15px 0;
  color: #fff;
  text-align: center;

  ${props => props.theme.fontStyle.title}
`;

const Center = styled.div`
  margin: 15px 0;
  border-radius: 4px;
  background-color: #00000096;
  padding: 20px;
`;

const Text = styled.p`
  color: #fff;

  ${props => props.theme.fontStyle.paragraph};
`;

const LinkContainer = styled.div`
  margin: 30px 0 0 0;
`;

const VideoBanner = ({ video }) => {
  return (
    <VideoBanner.Banner>
      <FlexСontainer>
        <Center>
          <Title>О бо мне</Title>
          <Text>Я - Наталья - интернет - предприниматель. Работаю только через интернет, удалённо.</Text>
          <Text>__</Text>
          <Text>Моя цель - научить вас зарабатывать через интернет от 30 000 рублей и более. </Text>
          <LinkContainer>
            <Link />
          </LinkContainer>
        </Center>
        <Сopyright>Oriflame Cosmetics - Бизнес-проект</Сopyright>
      </FlexСontainer>

      <VideoAnimate playsInline autoPlay muted loop>
        <source src={video} type="video/webm" />
      </VideoAnimate>
    </VideoBanner.Banner>
  );
};

VideoBanner.Banner = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export { VideoBanner };
