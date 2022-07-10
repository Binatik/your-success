import React, { useState } from "react";

import { initСontacts } from "@src/store/state";

import { Section } from "@cmp/section/Section";

const Сontacts = () => {
  const [contacts, setContacts] = useState(initСontacts);

  return (
    <>
      <Section grid="col4" isCenter={true} colSize="small" articles={contacts} anchor="contacts" bg="#000" title="Контакты &mdash;"></Section>
    </>
  );
};

export { Сontacts };
