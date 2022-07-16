import React, { useState } from "react";

import { Modal } from "@cmp/UI/Modal";

import { ModalContext } from "./ModalContext";

const ModalContextProvider = ({ children }) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  function openModal(propsModal) {
    setModalContent(propsModal);

    setTimeout(() => {
      setIsModalActive(!isModalActive);
    }, 300);
  }

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
