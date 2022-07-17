import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { IoMdPlay } from "react-icons/io";

import { ModalContext } from "@src/contexts/modalContext/ModalContext";
import { scrollStartPage } from "@src/store/helpers/scrollStartPage";
import { Center, PrimaryLink, NavigationLink, SecondaryText, Support } from "@src/store/styled/components";
import { initСontacts } from "@src/store/state";

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
        isCenter={true}
        grid="col4"
        colSize="small"
        articles={contacts}
        anchor="contacts"
        bg="#F6F6F6"
        title="Контакты &mdash;"
      >
        <Support style={{ color: "#000" }} href="https://ru.wikipedia.org/wiki/Oriflame">
          Проверить компанию
        </Support>
      </Section>
      <Section
        Component={MainCard}
        ComponentProps={{ isCenter: false, isGrow: false }}
        articles={[]}
        anchor="video"
        bg="#151719"
        title="Сомневаешься &mdash;"
      >
        <Frame isPadding={false}>
          <SecondaryBeatyText>
            Пока ты сомневаешься и придумываешь отмазки - Десятки тысяч партнеров компании уже осуществили свою мечту!
          </SecondaryBeatyText>
        </Frame>
        <Center>
          <Pulse handleClick={activeModal} componentIcon={<IoMdPlay />} />
          <PrimaryLink style={{ margin: "40px 0" }} href={linkQuestionnaire}>
            Присоединиться к нам
          </PrimaryLink>
          <NavigationLink color={"#00CCFF"} to={"/"} onClick={scrollStartPage}>
            На главную
          </NavigationLink>
        </Center>
      </Section>
    </>
  );
};

export { Сontacts };
