import React from "react";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";
import { Label } from "@src/store/styled/components/others";

const Search = ({ inputValue, setInputValue, handleSubmit }) => {

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          <GoSearchAbsolute />
          <InputAbsolute
            onChange={event => setInputValue(event.target.value)}
            value={inputValue}
            type="text"
            placeholder="Найти тему"
            autocomplete="off"
          />
        </Label>
      </Form>
    </>
  );
};

const Form = styled.form`
  margin: 30px 0;
  width: 100%;
`;

const GoSearchAbsolute = styled(GoSearch)`
  position: absolute;
  color: #00000088;
  font-size: 18px;
  left: 10px;
  z-index: 1;
`;

const InputAbsolute = styled.input`
  position: absolute;
  padding: 0 40px;
  border-radius: 3px;
  font-size: 20px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export { Search };
