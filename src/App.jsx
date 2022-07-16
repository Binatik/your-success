import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup, SwitchTransition } from "react-transition-group";

import { Layout } from "@cmp/layout/Layout";
import { Main } from "@pages/Main";
import { Idea } from "@pages/Idea";
import { Сontacts } from "@pages/Сontacts";
import { ErrorPage } from "@pages/ErrorPage";

import "./style.css";

import { ModalContextProvider } from "./contexts/modalContext/ModalContextProvider";

const App = () => {
  // const videoPageContacts = "https://www.youtube-nocookie.com/embed/HEMEDrilV7Q?controls=0";

  const location = useLocation();
  return (
    <ModalContextProvider>
      <>
        <TransitionGroup component={null}>
          <SwitchTransition mode={"out-in"}>
            <CSSTransition key={location.pathname} classNames="page" timeout={600} unmountOnExit>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Main />} />
                  <Route path="idea" element={<Idea />} />
                  <Route path="contacts" element={<Сontacts />} />
                  <Route path="404" element={<ErrorPage code={404} />} />
                  <Route path="*" element={<Navigate to="404" />} />
                </Route>
              </Routes>
            </CSSTransition>
          </SwitchTransition>
        </TransitionGroup>
      </>
    </ModalContextProvider>
  );
};

export default App;
