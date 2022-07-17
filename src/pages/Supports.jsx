import React from "react";

import { SecondaryText, Center, PrimaryText } from "@src/store/styled/components";

import { Printing } from "@cmp/UI/Printing";
import { Section } from "@cmp/section/Section";
import { MainCard } from "@cmp/UI/MainCard";

const Supports = () => {
  return (
    <>
      <Printing texts={["Добро пожаловать в службу поддержки."]} bg="#151719" color="#fff"></Printing>
      <Section
        Component={MainCard}
        ComponentProps={{ isCenter: false, isGrow: false }}
        anchor="tasks"
        articles={[]}
        bg="#F6F6F6"
        title="Темы &mdash;"
      >
        <Center>
          <PrimaryText>Мы уже занимаемся разработкой тем</PrimaryText>
        </Center>
      </Section>
    </>
  );
};

export { Supports };
