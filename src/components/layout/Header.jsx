import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { getBurgerState } from "@src/store/redux";
import { useThrottle } from "@src/hooks/useThrottle";
import { initIconСontacts } from "@src/store/state/reactIcons";
import { initNavigation } from "@src/store/state/navigate";
import { Container } from "@src/store/styled/components/others";

import { Burger } from "@cmp/UI/Burger";
import { Logo } from "@cmp/UI/Logo";
import { NavigationList } from "@cmp/UI/NavigationList";
import { IconContacts } from "@cmp/UI/IconContacts";

const Header = () => {
  const { toggle: isAciveBurger } = useSelector(getBurgerState);

  const [links, setLinks] = useState(initNavigation);
  const [iconСontacts, setIconСontacts] = useState(initIconСontacts);

  const [isTopScroll, setIsTopScroll] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const onScrollThrottle = useThrottle(onScroll, 600);

  function onScroll() {
    const doc = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

    if (doc > lastScroll && !isAciveBurger) {
      if (doc > 100) setIsTopScroll(true);
    } else {
      setIsTopScroll(false);
    }

    setLastScroll(doc);
  }

  useEffect(() => {
    document.addEventListener("scroll", onScrollThrottle, { passive: true });

    return () => {
      document.removeEventListener("scroll", onScrollThrottle);
    };
  }, [lastScroll]);

  return (
    <>
      <Header.Header isTopScroll={isTopScroll} isAciveBurger={isAciveBurger}>
        <Container>
          <Content>
            <Logo title="Твой" toTitle="успех" />
            <NavigationList links={links} />
            <IconContacts contacts={iconСontacts} />
            <Burger />
          </Content>
        </Container>
      </Header.Header>
    </>
  );
};

// __StyledComponents

Header.Header = styled.header`
  position: fixed;
  width: 100%;
  top: 0px;
  left: 0px;
  z-index: 10;
  background-color: ${props => props.theme.colors.surface};
  transform: translateY(${props => (props.isTopScroll ? "-100" : "0")}%);
  transition: transform 0.2s;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media ${props => props.theme.desktopFirst.tablet} {
    margin: 0 50px 0 0;
    justify-content: space-between;
  }
`;

export { Header };
