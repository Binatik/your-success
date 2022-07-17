import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";

import { ModalContext } from "@src/contexts/modalContext/ModalContext";
import { PrimaryButton, SecondaryText, Center, NavigationLink } from "@src/store/styled/components";
import { scrollStartPage } from "@src/store/helpers/scrollStartPage";
import { initEssence } from "@src/store/state";

import { Section } from "@cmp/section/Section";
import { Slider } from "@cmp/slider/Slider";
import { Frame } from "@cmp/UI/Frame";
import { Video } from "@cmp/UI/Video";
import { MainCard } from "@cmp/UI/MainCard";

const Idea = () => {
  const { openModal } = useContext(ModalContext);

  const [essence, setEssence] = useState(initEssence);

  const videoPath = "https://www.youtube.com/embed/rGV7shl5N-4";

  function activeModal() {
    openModal({
      isFullScreen: true,
      isTransparent: true,
      children: <Video path={videoPath} />,
    });
  }

  return (
    <>
      <Section Component={MainCard} ComponentProps={{ isCenter: false, isGrow: false }} articles={[]} bg="#00CCFF" title="">
        <Frame isPadding={true}>
          <SecondaryText style={{ margin: "20px 0" }}>
            Компания платит определенный процент от товарооборота, который создает Ваша команда
          </SecondaryText>
          <SecondaryText style={{ margin: "20px 0" }}>
            Вы и каждый партнер в Вашей команде приобретаете что-то для себя и своей семьи, также как обычно, только через интернет на сайте компании.
          </SecondaryText>
          <SecondaryText style={{ margin: "20px 0" }}>
            Чем больше партнеров и потребителей в Вашей сети, тем больше товарооборот компании, а значит и выше вознаграждение.
          </SecondaryText>
        </Frame>
      </Section>
      <Section
        Component={MainCard}
        ComponentProps={{ isCenter: false, isGrow: false }}
        articles={[]}
        bg="linear-gradient(180deg, rgba(0,204,255,1) 0%, rgb(246, 246, 246) 10%)"
        title="Доходы &mdash;"
      >
        <Slider />
      </Section>
      <Section Component={MainCard} ComponentProps={{ isCenter: false, isGrow: false }} articles={essence} bg="#002137" title="Суть &mdash;">
        <Center>
          <SecondaryText>Мы рекомендуем посмотреть презентацию, чтобы лучше ориентироваться в этом бизнесе.</SecondaryText>
          <PrimaryButton type="button" onClick={activeModal} style={{ margin: "40px 0" }}>
            Видео презентация
          </PrimaryButton>
          <NavigationLink color={"#00CCFF"} to={"/contacts"} onClick={scrollStartPage}>
            Читать далее
          </NavigationLink>
        </Center>
      </Section>
    </>
  );
};

export { Idea };
