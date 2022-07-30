import React, { useState } from "react";

import { initTasks, initPossibilitys } from "@src/store/state/mainCard";
import { initPrintingText } from "@src/store/state/printing";
import { scrollStartPage } from "@src/store/helpers/scrollStartPage";

import { SecondaryButtonLink } from "@src/store/styled/components/links";
import { SecondaryText, SurfaceText } from "@src/store/styled/components/texts";
import { Center } from "@src/store/styled/components/others";
import { SecondaryRouterLink } from "@src/store/styled/components/router";
import { SurfaceSectionTitle } from "@src/store/styled/components/titles";

import { Printing } from "@cmp/UI/Printing";
import { Card } from "@cmp/cards/Card";
import { Section } from "@cmp/UI/Section";
import { FlexGrid } from "@cmp/grid/FlexGrid";
import { Space } from "@cmp/UI/Space";

const Main = () => {
  const [tasks, setTasks] = useState(initTasks);
  const [possibilitys, setPossibilitys] = useState(initPossibilitys);
  const [printingText, setPrintingText] = useState(initPrintingText);

  const linkQuestionnaire = "https://docs.google.com/forms/d/e/1FAIpQLSd2WqntX_EK0EiDuxI8Tf_W-t_HiWmsy_sUPpjTUULIQTON-Q/viewform";
  return (
    <>
      <Printing texts={printingText} bg="#002137" color="#fff">
        <SurfaceText>Откройте собственный онлайн бизнес в интернете.</SurfaceText>
      </Printing>

      <Section anchor="tasks" color="#F6F6F6">
        <Center>
          <SurfaceSectionTitle>Что делать &mdash;</SurfaceSectionTitle>
        </Center>
        <Space type="m" size="big">
          <FlexGrid grid="col3" size="big" data={tasks} renderCard={element => <Card element={element} />} />
        </Space>
      </Section>

      <Section anchor="possibilitys" color="#002137">
        <Center>
          <SurfaceSectionTitle>Работая с нами &mdash;</SurfaceSectionTitle>
        </Center>
        <Space type="m" size="big">
          <FlexGrid grid="col3" size="big" isDecor data={possibilitys} renderCard={element => <Card element={element} />} />
        </Space>
        <Center>
          <SecondaryText>Регистрация в компании в нашем проекте вас ни к чему не обязывает, без вложений, а значит без риска.</SecondaryText>
          <Space type="m" size="big">
            <SecondaryButtonLink href={linkQuestionnaire}>Присоединиться к нам ➜</SecondaryButtonLink>
          </Space>
          <SecondaryRouterLink to={"/idea"} onClick={scrollStartPage}>
            Читать далее
          </SecondaryRouterLink>
        </Center>
      </Section>
    </>
  );
};

export { Main };
