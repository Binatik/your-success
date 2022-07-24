import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { PrimaryText } from "@src/store/styled/components/texts";
import { Center } from "@src/store/styled/components/others";
import { getPostsState } from "@src/store/redux";
import { filteredQuery } from "@src/store/redux/slice/posts";

import { Printing } from "@cmp/UI/Printing";
import { Section } from "@cmp/section/Section";

import { RouterCard } from "@cmp/UI/RouterCard";
import { Search } from "@cmp/UI/Search";

const Supports = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get("title") || "";
  const [inputValue, setInputValue] = useState(postQuery);

  const { filteredQuerySupports, supports } = useSelector(getPostsState);

  function submitQuery(event) {
    event.preventDefault();

    dispatch(filteredQuery({ inputValue }));

    const queryParams = {};
    if (inputValue.length) queryParams.title = inputValue;

    setSearchParams(queryParams);
  }

  function isFilterQuery() {
    if (filteredQuerySupports.length === 0 && postQuery === "") {
      return supports;
    } else {
      return filteredQuerySupports;
    }
  }

  return (
    <>
      <Printing texts={["Добро пожаловать в службу поддержки."]} bg="#002137" color="#fff">
        <Search inputValue={inputValue} setInputValue={setInputValue} handleSubmit={submitQuery} />
      </Printing>
      <Section
        Component={RouterCard}
        ComponentProps={{ isCenter: false, isGrow: false }}
        grid="col1"
        colSize="auto"
        anchor="tasks"
        articles={isFilterQuery()}
        bg="#F6F6F6"
        title="Темыs &mdash;"
      >
        <Center>{filteredQuerySupports.length === 0 && <PrimaryText>На ваш поисковый запрос ничего не найдено.</PrimaryText>}</Center>
      </Section>
    </>
  );
};

export { Supports };
