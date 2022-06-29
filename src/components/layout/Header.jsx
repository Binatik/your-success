import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Container, Phone } from "@src/store/styled/components";
import { useThrottle } from "@src/hooks/useThrottle";
import { initNavigation } from "@src/store/state";

import { Burger } from "@cmp/UI/Burger";
import { Logo } from "@cmp/UI/Logo";
import { NavigationList } from "@cmp/UI/NavigationList";

const RowContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media ${props => props.theme.desktopFirst.tablet} {
    justify-content: space-between;
  }
`;

const Header = () => {
  const [isTopScroll, setIsTopScroll] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  const onScrollThrottle = useThrottle(onScroll, 600);

  function onScroll() {
    const doc = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

    console.log(doc);

    if (doc > lastScroll) {
      if (doc > 1000) setIsTopScroll(true);
    } else {
      setIsTopScroll(false);
    }

    setLastScroll(doc);
  }

  useEffect(() => {
    document.addEventListener("scroll", onScrollThrottle, { passive: true });

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [lastScroll]);

  const [links, setLinks] = useState(initNavigation);

  return (
    <>
      <Header.Header isTopScroll={isTopScroll}>
        <RowContainer>
          <div style={{ margin: "0 30px 0 0", zIndex: 3 }}>
            <Logo title="Бизнес-проект" />
          </div>
          <NavigationList links={links} />
          <Phone style={{ margin: "0 40px 0 0" }} href="tel:+79099223801">
            +7 (909) 922-38-01
          </Phone>
          <Burger />
        </RowContainer>
      </Header.Header>
    </>
  );
};

Header.Header = styled.header`
  position: fixed;
  width: 100%;
  left: 0px;
  top: 0px;
  padding: 20px 0;
  background-color: ${props => props.theme.colors.surface};
  z-index: 11;
  transform: translateY(${props => (props.isTopScroll ? "-100" : "0")}%);
  transition: transform 0.2s;
`;

export { Header };
