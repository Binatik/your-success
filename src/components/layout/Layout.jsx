import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

import { Footer } from "./Footer";

const Router = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
`;

const Main = styled.main`
  margin: 80px 0 0 0;
  flex: 1 1 100%;
`;

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

export { Layout };
