import React, {useState} from "react";

import { PrimaryText } from "@src/store/styled/components/texts";
import { Center } from "@src/store/styled/components/others";

import { Printing } from "@cmp/UI/Printing";
import { Section } from "@cmp/section/Section";
import { initSupportCatalog } from "@src/store/state";
import { SupportedCard } from "@cmp/UI/SupportedCard";

const Supports = () => {
  const [catalog, setCatalog] = useState(initSupportCatalog)
  return (
    <>
      <Printing texts={["Добро пожаловать в службу поддержки."]} bg="#002137" color="#fff"></Printing>
      <Section
        Component={SupportedCard}
        ComponentProps={{ isCenter: false, isGrow: false }}
        grid="col1"
        colSize="auto"
        anchor="tasks"
        articles={catalog}
        bg="#F6F6F6"
        title="Темыs &mdash;"
      >
        <Center>
          <PrimaryText>Еще немного, поиск скоро будет готов!</PrimaryText>
        </Center>
      </Section>
    </>
  );
};

export { Supports };
