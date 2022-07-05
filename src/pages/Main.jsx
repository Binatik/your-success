import React, { useState } from "react";
import styled from "styled-components";

import { Link, SecondaryTitle, SecondaryText, Center } from "@src/store/styled/components";
import { initTasks, initPossibilitys } from "@src/store/state";
import animate from "@src/video/particle.mp4";

import { VideoBanner } from "@cmp/UI/VideoBanner";
import { Section } from "@cmp/section/Section";
import { Slider } from "@cmp/slider/Slider";

const Income = styled.div`
  outline: thick double ${props => props.theme.colors.surface};
  padding: 15px;
`;

const Main = () => {
  const [tasks, setTasks] = useState(initTasks);
  const [possibilitys, setPossibilitys] = useState(initPossibilitys);

  const linkQuestionnaire = "https://docs.google.com/forms/d/e/1FAIpQLSd2WqntX_EK0EiDuxI8Tf_W-t_HiWmsy_sUPpjTUULIQTON-Q/viewform";
  return (
    <>
      <VideoBanner video={animate}>
        <SecondaryTitle style={{ margin: "0 0 25px 0" }}>О себе</SecondaryTitle>
        <SecondaryText>Я - Наталья - интернет - предприниматель. Работаю только через интернет, удалённо.</SecondaryText>
        <SecondaryText>__</SecondaryText>
        <SecondaryText>Моя цель - научить вас зарабатывать через интернет от 30 000 рублей и более. </SecondaryText>
        <Link style={{ margin: "20px 0" }} href={linkQuestionnaire}>
          Заполнить анкету
        </Link>
      </VideoBanner>
      <Section articles={tasks} bg="#fff" title="Что делать &mdash;"></Section>
      <Section articles={possibilitys} bg="#000" title="Работая с нами &mdash;">
        <SecondaryText style={{ textAlign: "center" }}>
          Регистрация в компании в нашем проекте вас ни к чему не обязывает, без вложений, а значит без риска.
        </SecondaryText>
        <Center>
          <Link style={{ margin: "40px 0" }} href={linkQuestionnaire}>
            Присоединиться к нам
          </Link>
        </Center>
      </Section>
      <Section articles={[]} bg="#000" title="Откуда доход &mdash;">
        <Income>
          <SecondaryText style={{ margin: "20px 0" }}>
            Компания Oriflame платит определенный процент от товарооборота, который создает Ваша команда
          </SecondaryText>
          <SecondaryText style={{ margin: "20px 0" }}>
            Вы и каждый партнер в Вашей команде приобретаете что-то для себя и своей семьи, также как обычно, только через интернет на сайте компании.
          </SecondaryText>
          <SecondaryText style={{ margin: "20px 0" }}>
            Чем больше партнеров и потребителей в Вашей сети, тем больше товарооборот компании, а значит и выше вознаграждение.
          </SecondaryText>
        </Income>
      </Section>
      <Section articles={[]} bg="#fff" title="Доходы &mdash;">
        <Slider />
      </Section>
    </>
  );
};

export { Main };
