import React, { useState } from "react";
import styled from "styled-components";

import { Center, PrimaryLink, SecondaryText, Support } from "@src/store/styled/components";
import { initСontacts } from "@src/store/state";

import { Section } from "@cmp/section/Section";
import { Video } from "@cmp/UI/Video";
import { Frame } from "@cmp/UI/Frame";

const SecondaryBeatyText = styled(SecondaryText)`
  text-align: center;
  text-shadow: 1px 1px 40px #000;
  background-color: transparent;
`;

const Сontacts = () => {
  const [contacts, setContacts] = useState(initСontacts);

  const videoPath = "https://www.youtube-nocookie.com/embed/HEMEDrilV7Q?controls=0";
  const linkQuestionnaire = "https://docs.google.com/forms/d/e/1FAIpQLSd2WqntX_EK0EiDuxI8Tf_W-t_HiWmsy_sUPpjTUULIQTON-Q/viewform";

  return (
    <>
      <Section grid="col4" isCenter={true} colSize="small" articles={contacts} anchor="contacts" bg="#fff" title="Контакты &mdash;">
        <Support style={{ color: "#000" }} href="https://ru.wikipedia.org/wiki/Oriflame">
          Проверить компанию
        </Support>
      </Section>
      <Section articles={[]} anchor="video" bg="#151719" title="Сомневаешься &mdash;">
        <Frame isPadding={false}>
          <SecondaryBeatyText>
            Пока ты сомневаешься и придумываешь отмазки - Десятки тысяч партнеров компании уже осуществили свою мечту!
          </SecondaryBeatyText>
        </Frame>
        <Video path={videoPath} />
        <Center>
          <PrimaryLink style={{ margin: "40px 0" }} href={linkQuestionnaire}>
            Присоединиться к нам
          </PrimaryLink>
        </Center>
      </Section>
    </>
  );
};

export { Сontacts };
