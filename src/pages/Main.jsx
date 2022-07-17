import React, { useState } from "react";
import styled from "styled-components";

import { PrimaryLink, SecondaryText, Center, NavigationLink } from "@src/store/styled/components";
import { initTasks, initPossibilitys, initPrintingText } from "@src/store/state";
import { scrollStartPage } from "@src/store/helpers/scrollStartPage";

import { Section } from "@cmp/section/Section";
import { Printing } from "@cmp/UI/Printing";
import { MainCard } from "@cmp/UI/MainCard";

const Main = () => {
  const [tasks, setTasks] = useState(initTasks);
  const [possibilitys, setPossibilitys] = useState(initPossibilitys);
  const [printingText, setPrintingText] = useState(initPrintingText);

  const linkQuestionnaire = "https://docs.google.com/forms/d/e/1FAIpQLSd2WqntX_EK0EiDuxI8Tf_W-t_HiWmsy_sUPpjTUULIQTON-Q/viewform";
  return (
    <>
      <Printing texts={printingText} bg="#002137" color="#fff"></Printing>
      <Section
        Component={MainCard}
        ComponentProps={{ isCenter: false, isGrow: false }}
        anchor="tasks"
        articles={tasks}
        bg="#F6F6F6"
        title="Что делать &mdash;"
      ></Section>
      <Section
        Component={MainCard}
        ComponentProps={{ isCenter: false, isGrow: false }}
        articles={possibilitys}
        bg="#002137"
        title="Работая с нами &mdash;"
      >
        <Center>
          <SecondaryText>Регистрация в компании в нашем проекте вас ни к чему не обязывает, без вложений, а значит без риска.</SecondaryText>
          <PrimaryLink style={{ margin: "40px 0" }} href={linkQuestionnaire}>
            Присоединиться к нам
          </PrimaryLink>
          <NavigationLink color="#00CCFF" to={"/idea"} onClick={scrollStartPage}>
            Читать далее
          </NavigationLink>
        </Center>
      </Section>
    </>
  );
};

export { Main };
