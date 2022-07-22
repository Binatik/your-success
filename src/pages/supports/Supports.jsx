import React from "react";
import { useSelector } from "react-redux";

import { PrimaryText } from "@src/store/styled/components/texts";
import { Center } from "@src/store/styled/components/others";
import { getPostsState } from "@src/store/redux";

import { Printing } from "@cmp/UI/Printing";
import { Section } from "@cmp/section/Section";

import { RouterCard } from "@cmp/UI/RouterCard";


const Supports = () => {
  const { supports } = useSelector(getPostsState)
 
  return (
    <>
      <Printing texts={["Добро пожаловать в службу поддержки."]} bg="#002137" color="#fff"></Printing>
      <Section
        Component={RouterCard}
        ComponentProps={{ isCenter: false, isGrow: false }}
        grid="col1"
        colSize="auto"
        anchor="tasks"
        articles={supports}
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
