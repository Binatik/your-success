import React, { useState } from "react";
import styled from "styled-components";

import { PrimaryLink, SecondaryText, Center } from "@src/store/styled/components";
import { initEssence } from "@src/store/state";

import { Section } from "@cmp/section/Section";
import { Slider } from "@cmp/slider/Slider";
import { Frame } from "@cmp/UI/Frame";

const Idea = () => {
  const [essence, setEssence] = useState(initEssence);

  const videoPart = "https://www.youtube.com/watch?v=rGV7shl5N-4";
  return (
    <>
      <Section articles={[]} bg="#00CCFF" title="">
        <Frame>
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
      <Section articles={[]} bg="linear-gradient(180deg, rgba(0,204,255,1) 0%, rgba(255,255,255,1) 10%)" title="Доходы &mdash;">
        <Slider />
      </Section>
      <Section articles={essence} bg="#000" title="Суть &mdash;">
        <Center>
          <SecondaryText>Мы рекомендуем посмотреть презентацию, чтобы лучше ориентироваться в этом бизнесе.</SecondaryText>
          <PrimaryLink style={{ margin: "40px 0" }} href={videoPart} target="_blank">
            Видео презентация
          </PrimaryLink>
        </Center>
      </Section>
    </>
  );
};

export { Idea };
