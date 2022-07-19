import React from "react";
import styled from "styled-components";

import { PrimaryText } from "@src/store/styled/components/texts";
import { SecondaryLink } from "@src/store/styled/components/links";

const PrimaryBeatyText = styled(PrimaryText)`
  font-size: 0;
`;

const SecondaryBeatyLink = styled(SecondaryLink)`
  padding: 8px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  margin: 0 10px 0 0;

  &:hover {
    color: ${props => props.theme.colors.surface};
  }
`;

const IconContacts = ({ contacts }) => {
  return (
    <>
      <IconContacts.IconContacts>
        {contacts.map(({ id, ComponentIcon, path, title }) => (
          <SecondaryBeatyLink target="_blank" key={id} href={path}>
            <PrimaryBeatyText>{title}</PrimaryBeatyText>
            {<ComponentIcon />}
          </SecondaryBeatyLink>
        ))}
      </IconContacts.IconContacts>
    </>
  );
};

IconContacts.IconContacts = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 5;

  @media ${props => props.theme.desktopFirst.tablet} {
    margin: 0 50px 0 0;
  }
`;
export { IconContacts };
