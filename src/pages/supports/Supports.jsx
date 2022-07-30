import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { PrimaryText } from "@src/store/styled/components/texts";
import { Center } from "@src/store/styled/components/others";
import { getPostsState } from "@src/store/redux";
import { filteredQuery } from "@src/store/redux/slice/posts";

import { Printing } from "@cmp/UI/Printing";
import { RouterCard } from "@cmp/cards/RouterCard";
import { Search } from "@cmp/UI/Search";
import { SurfaceSectionTitle } from "@src/store/styled/components/titles";
import { Space } from "@cmp/UI/Space";
import { FlexGrid } from "@cmp/grid/FlexGrid";
import { Section } from "@cmp/UI/Section";

const Supports = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get("title") || "";
  const [inputValue, setInputValue] = useState(postQuery);

  const { filteredQuerySupports, supports } = useSelector(getPostsState);

  useEffect(() => {
    dispatch(filteredQuery({ postQuery }));
  }, [postQuery]);

  function submitQuery(event) {
    event.preventDefault();
    setSearchParams({ title: inputValue });
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
      <Section anchor="contacts" color="#F6F6F6">
        <Center>
          <SurfaceSectionTitle>Темыs &mdash;</SurfaceSectionTitle>
        </Center>
        <Space type="m" size="small">
        <FlexGrid grid="col1" size="auto" data={isFilterQuery()} renderCard={element => <RouterCard element={element} />} />
        </Space>
        <Space type="p" isSpaceLeft={true}>
          <Center>{filteredQuerySupports.length === 0 && <PrimaryText>На ваш поисковый запрос ничего не найдено.</PrimaryText>}</Center>
        </Space>
      </Section>
    </>
  );
};

export { Supports };
