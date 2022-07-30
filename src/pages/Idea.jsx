import React, { useState, useContext } from "react";

import { ModalContext } from "@src/contexts/modalContext/ModalContext";
import { scrollStartPage } from "@src/store/helpers/scrollStartPage";
import { initIdea } from "@src/store/state/mainCard";

import { SecondaryText } from "@src/store/styled/components/texts";
import { Center, FlexItems } from "@src/store/styled/components/others";
import { SecondaryRouterLink } from "@src/store/styled/components/router";
import { SecondaryButton } from "@src/store/styled/components/buttons";
import { SecondaryLink } from "@src/store/styled/components/links";
import { SurfaceSectionTitle } from "@src/store/styled/components/titles";

import { Slider } from "@cmp/slider/Slider";
import { Frame } from "@cmp/UI/Frame";
import { Video } from "@cmp/UI/Video";
import { Card } from "@cmp/cards/Card";
import { Section } from "@cmp/UI/Section";
import { Space } from "@cmp/UI/Space";
import { FlexGrid } from "@cmp/grid/FlexGrid";

const Idea = () => {
  const { openModal } = useContext(ModalContext);

  const [idea, setIdea] = useState(initIdea);

  const videoPath = "https://www.youtube.com/embed/rGV7shl5N-4";
  const sectionSliderСolor = "linear-gradient(180deg,#002137 60%,rgb(246,246,246) 61%)";

  function activeModal() {
    openModal({
      isFullScreen: true,
      isTransparent: true,
      children: <Video path={videoPath} />,
    });
  }

  return (
    <>
      <Section anchor="tasks" color="#002137">
        <Center>
          <SurfaceSectionTitle>Процесс &mdash;</SurfaceSectionTitle>
        </Center>
        <Frame isPadding={false}>
          <Space type="m" size="min">
            <SecondaryText>Компания платит определенный процент от товарооборота, который создает Ваша команда</SecondaryText>
          </Space>
          <SecondaryText>
            Вы и каждый партнер в Вашей команде приобретаете что-то для себя и своей семьи, также как обычно, только через интернет на сайте компании.
          </SecondaryText>
          <Space type="m" size="min">
            <SecondaryText>
              Чем больше партнеров и потребителей в Вашей сети, тем больше товарооборот компании, а значит и выше вознаграждение.
            </SecondaryText>
          </Space>
        </Frame>
      </Section>

      <Section anchor="slider" color={sectionSliderСolor}>
        <Center>
          <SurfaceSectionTitle>Доходы реальных людей &mdash;</SurfaceSectionTitle>
        </Center>
        <FlexItems>
          <Slider />
          <SecondaryLink mobileColor="#002137" target="_blank" href="https://vk.com/club122297325">
            Еще больше доходов ➜
          </SecondaryLink>
        </FlexItems>
      </Section>

      <Section anchor="idea" color="#002137">
        <Center>
          <SurfaceSectionTitle>Суть &mdash;</SurfaceSectionTitle>
        </Center>
        <Space type="m" size="big">
        <FlexGrid grid="col3" size="big" isDecor data={idea} renderCard={element => <Card element={element} />} />
        </Space>
        <Center>
          <SecondaryText>Мы рекомендуем посмотреть презентацию, чтобы лучше ориентироваться в этом бизнесе.</SecondaryText>
          <Space type="m" size="big">
            <SecondaryButton type="button" onClick={activeModal}>
              Видео презентация
            </SecondaryButton>
          </Space>
          <SecondaryRouterLink to={"/contacts"} onClick={scrollStartPage}>
            Читать далее
          </SecondaryRouterLink>
        </Center>
      </Section>
    </>
  );
};

export { Idea };
