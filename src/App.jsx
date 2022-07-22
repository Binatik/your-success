import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup, SwitchTransition } from "react-transition-group";

import { Main } from "@pages/Main";
import { Idea } from "@pages/Idea";
import { Сontacts } from "@pages/Сontacts";
import { ErrorPage } from "@pages/ErrorPage";
import { Supports } from "@pages/supports/Supports";
import { Post } from "@pages/supports/Post";

import { ModalContextProvider } from "./contexts/modalContext/ModalContextProvider";
import { Layout } from "@cmp/layout/Layout";
import { Header } from "@cmp/layout/Header";

import "./style.css";

const App = () => {

  const location = useLocation();
  return (
    <ModalContextProvider>
      <>
        <Header />
        <TransitionGroup component={null}>
          <SwitchTransition mode={"out-in"}>
            <CSSTransition key={location.pathname} classNames="page" timeout={200} unmountOnExit>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Main />} />
                  <Route path="idea" element={<Idea />} />
                  <Route path="contacts" element={<Сontacts />} />
                  <Route path="supports" element={<Supports />} />
                  <Route path="supports/:id/:title" element={<Post />} />
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
