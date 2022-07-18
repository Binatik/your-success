import React, { useState } from "react";

import { initTasks, initPossibilitys, initPrintingText } from "@src/store/state";
import { scrollStartPage } from "@src/store/helpers/scrollStartPage";

import { PrimaryLink } from "@src/store/styled/components/links";
import { SecondaryText } from "@src/store/styled/components/texts";
import { Center } from "@src/store/styled/components/others";
import { PrimaryNavLink } from "@src/store/styled/components/router";

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
      <Printing texts={printingText} bg="#002137" color="#fff">
        <SecondaryText style={{ color: "#00CCFF" }}>Откройте собственный онлайн бизнес в интернете.</SecondaryText>
      </Printing>
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
        isIndex={true}
        articles={possibilitys}
        bg="#002137"
        title="Работая с нами &mdash;"
      >
        <Center>
          <SecondaryText>Регистрация в компании в нашем проекте вас ни к чему не обязывает, без вложений, а значит без риска.</SecondaryText>
          <PrimaryLink style={{ margin: "40px 0" }} href={linkQuestionnaire}>
            Присоединиться к нам
          </PrimaryLink>
          <PrimaryNavLink color="#00CCFF" to={"/idea"} onClick={scrollStartPage}>
            Читать далее
          </PrimaryNavLink>
        </Center>
      </Section>
    </>
  );
};

export { Main };
