import React, { useState, useContext } from "react";

import { ModalContext } from "@src/contexts/modalContext/ModalContext";
import { scrollStartPage } from "@src/store/helpers/scrollStartPage";
import { initIdea } from "@src/store/state/mainCard";

import { SecondaryText } from "@src/store/styled/components/texts";
import { Center, FlexItems } from "@src/store/styled/components/others";
import { SecondaryRouterLink } from "@src/store/styled/components/router";
import { SecondaryButton } from "@src/store/styled/components/buttons";

import { Section } from "@cmp/section/Section";
import { Slider } from "@cmp/slider/Slider";
import { Frame } from "@cmp/UI/Frame";
import { Video } from "@cmp/UI/Video";
import { MainCard } from "@cmp/UI/MainCard";
import { SecondaryLink } from "@src/store/styled/components/links";

const Idea = () => {
  const { openModal } = useContext(ModalContext);

  const [idea, setIdea] = useState(initIdea);

  const videoPath = "https://www.youtube.com/embed/rGV7shl5N-4";
  const sectionSliderBg = "linear-gradient(180deg,#002137 60%,rgb(246,246,246) 61%)";

  function activeModal() {
    openModal({
      isFullScreen: true,
      isTransparent: true,
      children: <Video path={videoPath} />,
    });
  }

  return (
    <>
      <Section Component={MainCard} ComponentProps={{ isCenter: false, isGrow: false }} isDecor={false} articles={[]} bg="#002137" title="">
        <Frame isPadding={false}>
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
        isDecor={false}
        grid="col3"
        colSize="big"
        articles={[]}
        bg={sectionSliderBg}
        title="Доходы &mdash;"
      >
        <FlexItems>
          <Slider />
          <SecondaryLink mobileColor="#002137" target="_blank" href="https://vk.com/club122297325">
            Еще больше доходов ➜
          </SecondaryLink>
        </FlexItems>
      </Section>
      <Section
        Component={MainCard}
        ComponentProps={{ isCenter: false, isGrow: false }}
        isDecor={true}
        grid="col3"
        colSize="big"
        articles={idea}
        bg="#002137"
        title="Суть &mdash;"
      >
        <Center>
          <SecondaryText>Мы рекомендуем посмотреть презентацию, чтобы лучше ориентироваться в этом бизнесе.</SecondaryText>
          <SecondaryButton type="button" onClick={activeModal} style={{ margin: "40px 0" }}>
            Видео презентация
          </SecondaryButton>
          <SecondaryRouterLink to={"/contacts"} onClick={scrollStartPage}>
            Читать далее
          </SecondaryRouterLink>
        </Center>
        <Frame isPadding={false}>
          <SecondaryText>Обратите внимания, что это бизнес не рекрутеров, а учителей. </SecondaryText>
          <SecondaryText>Вам платят деньги за работу с людьми, а не просто приглашая их.</SecondaryText>
        </Frame>
      </Section>
    </>
  );
};

export { Idea };
