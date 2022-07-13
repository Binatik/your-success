import React, { useState } from "react";
import styled from "styled-components";

import { PrimaryButton, SecondaryText, Center } from "@src/store/styled/components";
import { initEssence } from "@src/store/state";

import { Section } from "@cmp/section/Section";
import { Slider } from "@cmp/slider/Slider";
import { Frame } from "@cmp/UI/Frame";
import { Modal } from "@cmp/UI/Modal";
import { Video } from "@cmp/UI/Video";

const Idea = () => {
  const [essence, setEssence] = useState(initEssence);
  const [isVideoModalActive, setIsVideoModalActive] = useState(false);

  const videoPath = "https://www.youtube.com/embed/rGV7shl5N-4";

  function openModal() {
    setIsVideoModalActive(!isVideoModalActive);
  }
  return (
    <>
      <Modal isFullScreen={true} isTransparent={true} isActive={isVideoModalActive} setIsActive={setIsVideoModalActive}>
        <Video path={videoPath} />
      </Modal>
      <Section articles={[]} bg="#00CCFF" title="">
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
      <Section articles={[]} bg="linear-gradient(180deg, rgba(0,204,255,1) 0%, rgb(246, 246, 246) 10%)" title="Доходы &mdash;">
        <Slider />
      </Section>
      <Section articles={essence} bg="#151719" title="Суть &mdash;">
        <Center>
          <SecondaryText>Мы рекомендуем посмотреть презентацию, чтобы лучше ориентироваться в этом бизнесе.</SecondaryText>
          <PrimaryButton type="button" onClick={openModal} style={{ margin: "40px 0" }}>
            Видео презентация
          </PrimaryButton>
        </Center>
      </Section>
    </>
  );
};

export { Idea };
