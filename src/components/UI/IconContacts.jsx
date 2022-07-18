import React from "react";
import styled from "styled-components";

import { Support } from "@src/store/styled/components/others";
import { PrimaryText } from "@src/store/styled/components/texts";

const PrimaryBeatyText = styled(PrimaryText)`
  font-size: 0;
`;

const BeatySupport = styled(Support)`
  display: flex;
  align-items: center;
  margin: 0 10px 0 0;
  font-size: 2.3rem;
  padding: 0;
`;

const IconContacts = ({ contacts }) => {
  return (
    <>
      <IconContacts.IconContacts>
        {contacts.map(({ id, ComponentIcon, path, title }) => (
          <BeatySupport target="_blank" key={id} href={path}>
            <PrimaryBeatyText>{title}</PrimaryBeatyText>
            {<ComponentIcon />}
          </BeatySupport>
        ))}
      </IconContacts.IconContacts>
    </>
  );
};

IconContacts.IconContacts = styled.div`
  display: flex;
  align-items: center;

  @media ${props => props.theme.desktopFirst.tablet} {
    margin: 0 50px 0 0;
  }
`;
export { IconContacts };
