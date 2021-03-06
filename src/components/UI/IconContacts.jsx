import React from "react";
import styled from "styled-components";

import { PrimaryText } from "@src/store/styled/components/texts";
import { SecondaryLink } from "@src/store/styled/components/links";

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

// __StyledComponents

IconContacts.IconContacts = styled.div`
  position: relative;
  padding: 5px 0;
  display: flex;
  align-items: center;
  z-index: 5;
`;

const PrimaryBeatyText = styled(PrimaryText)`
  font-size: 0;
`;

const SecondaryBeatyLink = styled(SecondaryLink)`
  padding: 8px;
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  margin: 0 10px 0 0;

  &:hover {
    color: ${props => props.theme.colors.surface};
  }

  @media ${props => props.theme.desktopFirst.tablet} {
    width: auto;
  }
`;

export { IconContacts };
