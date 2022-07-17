import React from "react";

import { PrimaryText } from "@src/store/styled/components/texts";
import { Center } from "@src/store/styled/components/others";

import { Printing } from "@cmp/UI/Printing";
import { Section } from "@cmp/section/Section";
import { MainCard } from "@cmp/UI/MainCard";

const Supports = () => {
  return (
    <>
      <Printing texts={["Добро пожаловать в службу поддержки."]} bg="#002137" color="#fff"></Printing>
      <Section
        Component={MainCard}
        ComponentProps={{ isCenter: false, isGrow: false }}
        anchor="tasks"
        articles={[]}
        bg="#F6F6F6"
        title="Темыs &mdash;"
      >
        <Center>
          <PrimaryText>Мы уже занимаемся разработкой тем</PrimaryText>
        </Center>
      </Section>
    </>
  );
};

export { Supports };
