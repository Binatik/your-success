import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import { Footer } from "./Footer";

const Layout = () => {
  return (
    <>
      <Router>
        <Main>
          <Outlet />
        </Main>
        <Footer />
      </Router>
    </>
  );
};

// __StyledComponents

const Router = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
`;

const Main = styled.main`
  padding: 90px 0 0 0;
  flex: 1 1 100%;
`;

export { Layout };
