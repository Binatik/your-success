import React, { useState } from "react";
import styled from "styled-components";

import { PrimaryLink, PrimaryHashLink, SecondaryTitle, SecondaryText, Center } from "@src/store/styled/components";
import { initTasks, initPossibilitys } from "@src/store/state";
import animate from "@src/video/particle.mp4";

import { VideoBanner } from "@cmp/UI/VideoBanner";
import { Section } from "@cmp/section/Section";

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
        <PrimaryHashLink style={{ margin: "20px 0" }} to="#tasks">
          Читать дальше
        </PrimaryHashLink>
      </VideoBanner>
      <Section anchor="tasks" articles={tasks} bg="#fff" title="Что делать &mdash;"></Section>
      <Section articles={possibilitys} bg="#000" title="Работая с нами &mdash;">
        <SecondaryText style={{ textAlign: "center" }}>
          Регистрация в компании в нашем проекте вас ни к чему не обязывает, без вложений, а значит без риска.
        </SecondaryText>
        <Center>
          <PrimaryLink style={{ margin: "40px 0" }} href={linkQuestionnaire}>
            Присоединиться к нам
          </PrimaryLink>
        </Center>
      </Section>
    </>
  );
};

export { Main };
