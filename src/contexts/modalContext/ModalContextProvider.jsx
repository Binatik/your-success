import React, { useState, useEffect } from "react";

import { Modal } from "@cmp/UI/Modal";

import { ModalContext } from "./ModalContext";

const ModalContextProvider = ({ children }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  function openModal(propsModal) {
    setModalContent(propsModal);

    setTimeout(() => {
      setIsModalActive(!isModalActive);
    }, 100);
  }

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.body.offsetWidth;
    const body = document.body;
    const header = body.querySelector("header");

    if (isModalActive) {
      body.style.overflow = "hidden";
      body.style.paddingRight = `${scrollbarWidth}px`;
      header.style.paddingRight = `${scrollbarWidth}px`;
    }

    if (!isModalActive) {
      body.style.overflow = null;
      body.style.paddingRight = null;
      header.style.paddingRight = null;
    }
  }, [isModalActive]);

  return (
    <>
      <ModalContext.Provider value={{ openModal }}>
        {modalContent && <Modal isActive={isModalActive} setIsActive={setIsModalActive} {...modalContent} />}
        {children}
      </ModalContext.Provider>
    </>
  );
};

export { ModalContextProvider };
