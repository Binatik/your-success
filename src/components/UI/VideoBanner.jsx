import React from "react";
import styled from "styled-components";

import { Container } from "@src/store/styled/styleComponents";
import { Link } from "./Link";

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;
`;

const VideoAnimate = styled.video`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const FlexСontainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Title = styled.h1`
  margin: 0 0 15px 0;
  color: #fff;
  text-align: center;

  ${props => props.theme.fontStyle.title}
`;

const Center = styled.div`
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
      <VideoAnimate playsInline autoPlay muted loop>
        <source src={video} type="video/webm" />
        Your browser does not support the video tag.
      </VideoAnimate>

      <Content>
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
        </FlexСontainer>
      </Content>
    </VideoBanner.Banner>
  );
};

VideoBanner.Banner = styled.section`
  position: relative;
  height: 100%;
`;

export { VideoBanner };
