import React, { useState, useContext } from "react";
import styled from "styled-components";
import { IoMdPlay } from "react-icons/io";

import { ModalContext } from "@src/contexts/modalContext/ModalContext";
import { scrollStartPage } from "@src/store/helpers/scrollStartPage";
import { initСontacts } from "@src/store/state";

import { SecondaryButtonLink, PrimaryLink } from "@src/store/styled/components/links";
import { SecondaryText } from "@src/store/styled/components/texts";
import { Center } from "@src/store/styled/components/others";
import { PrimaryRouterButtonLink } from "@src/store/styled/components/router";

import { Section } from "@cmp/section/Section";
import { Video } from "@cmp/UI/Video";
import { Frame } from "@cmp/UI/Frame";
import { Pulse } from "@cmp/UI/Pulse";
import { MainCard } from "@cmp/UI/MainCard";

const SecondaryBeatyText = styled(SecondaryText)`
  text-align: center;
  text-shadow: 1px 1px 40px #000;
  background-color: transparent;
`;

const Сontacts = () => {
  const { openModal } = useContext(ModalContext);

  const [contacts, setContacts] = useState(initСontacts);

  const videoPath = "https://www.youtube-nocookie.com/embed/HEMEDrilV7Q?controls=0";
  const linkQuestionnaire = "https://docs.google.com/forms/d/e/1FAIpQLSd2WqntX_EK0EiDuxI8Tf_W-t_HiWmsy_sUPpjTUULIQTON-Q/viewform";

  function activeModal() {
    openModal({
      isFullScreen: true,
      isTransparent: true,
      children: <Video path={videoPath} />,
    });
  }

  return (
    <>
      <Section
        Component={MainCard}
        ComponentProps={{ isCenter: true, isGrow: true }}
        isDecor={false}
        grid="col2"
        colSize="small"
        articles={contacts}
        bg="#F6F6F6"
        title="Контакты &mdash;"
      >
        <PrimaryLink target="_blank" href="https://ru.wikipedia.org/wiki/Oriflame">
          Проверить компанию ➜
        </PrimaryLink>
      </Section>
      <Section
        Component={MainCard}
        ComponentProps={{ isCenter: false, isGrow: false }}
        isDecor={false}
        grid="col3"
        colSize="big"
        articles={[]}
        anchor="video"
        bg="#002137"
        title="Сомневаешься &mdash;"
      >
        <Frame isPadding={false}>
          <SecondaryBeatyText>
            Пока ты сомневаешься и придумываешь отмазки - Десятки тысяч партнеров компании уже осуществили свою мечту!
          </SecondaryBeatyText>
        </Frame>
        <Center>
          <Pulse handleClick={activeModal} componentIcon={<IoMdPlay />} />
          <SecondaryButtonLink style={{ margin: "60px 0 20px 0" }} href={linkQuestionnaire}>
            Присоединиться к нам ➜
          </SecondaryButtonLink> 
          <SecondaryText>или</SecondaryText>
          <PrimaryRouterButtonLink style={{ margin: "20px 0" }} to={"/supports"} onClick={scrollStartPage}>
            Поддержка
          </PrimaryRouterButtonLink>
        </Center>
      </Section>
    </>
  );
};

export { Сontacts };
