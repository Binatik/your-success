import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { FiPhoneCall } from "react-icons/fi";

import { Container, Support } from "@src/store/styled/components";
import { getBurgerState } from "@src/store/redux";
import { useThrottle } from "@src/hooks/useThrottle";
import { initNavigation } from "@src/store/state";

import { Burger } from "@cmp/UI/Burger";
import { Logo } from "@cmp/UI/Logo";
import { NavigationList } from "@cmp/UI/NavigationList";

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media ${props => props.theme.desktopFirst.tablet} {
    justify-content: space-between;
  }
`;

const PhoneWrapper = styled.div`
  display: inline-block;
`;

const PhoneIcon = styled(FiPhoneCall)`
  transform: rotate(10deg);
  margin: 0 8px 0 0;
  font-size: 20px;
  color: #fff;
`;

const Header = () => {
  const { toggle: isAciveBurger } = useSelector(getBurgerState);

  const [links, setLinks] = useState(initNavigation);

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
      document.removeEventListener("scroll", onScroll);
    };
  }, [lastScroll]);

  return (
    <>
      <Header.Header isTopScroll={isTopScroll} isAciveBurger={isAciveBurger}>
        <Container>
          <Content>
            <Logo title="Твой" toTitle="успех" />
            <NavigationList links={links} />
            <PhoneWrapper>
              <PhoneIcon />
              <Support style={{ margin: "0 50px 0 0" }} href="tel:+79099223801">
                +7 (909) 922-38-01
              </Support>
            </PhoneWrapper>
            <Burger />
          </Content>
        </Container>
      </Header.Header>
    </>
  );
};

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

export { Header };
