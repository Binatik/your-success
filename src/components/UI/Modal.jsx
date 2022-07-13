import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Content = styled.div`
  cursor: ${props => (props.isFullScreen ? "pointer" : "auto")};
  width: ${props => (props.isFullScreen ? "100%" : "60%")};
  height: ${props => (props.isFullScreen ? "100%" : "auto")};
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: ${props => (props.isFullScreen ? "5px" : "20px")};
  background-color: ${props => (props.isTransparent ? "transparent" : "#fff")};

  @media ${props => props.theme.desktopFirst.tablet} {
    width: 95%;
  }
`;

const Modal = ({ isFullScreen, isActive, setIsActive, isTransparent, children }) => {
  function closesChild(event) {
    isFullScreen ? "" : event.stopPropagation();
  }

  function setModal() {
    return (
      <Modal.Modal isActive={isActive} onClick={() => setIsActive(false)}>
        <Content isFullScreen={isFullScreen} isTransparent={isTransparent} onClick={closesChild}>
          {children}
        </Content>
      </Modal.Modal>
    );
  }

  const root = document.getElementById("root");
  const modal = setModal();

  return ReactDOM.createPortal(modal, root);
};

Modal.Modal = styled.div`
  cursor: pointer;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${props => props.theme.colors.primary + "99"}; /* Black w/ opacity */
  opacity: ${props => (props.isActive ? "1" : "0")};
  pointer-events: ${props => (props.isActive ? "all" : "none")};
  transition: opacity 0.2s;
`;

export { Modal };
