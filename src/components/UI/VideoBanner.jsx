import React from "react";
import styled from "styled-components";

import { Container } from "@src/store/styled/components";

const VideoAnimate = styled.video`
  object-fit: cover;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const FlexСontainer = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
  z-index: 3;
`;

const Center = styled.div`
  margin: 15px 0;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.primary + "99"};
  padding: 20px;
`;

const VideoBanner = ({ video, children }) => {
  return (
    <>
      <VideoBanner.Banner>
        <FlexСontainer>
          <Center>{children}</Center>
        </FlexСontainer>

        <VideoAnimate playsInline autoPlay muted loop>
          <source src={video} type="video/webm" />
        </VideoAnimate>
      </VideoBanner.Banner>
    </>
  );
};

VideoBanner.Banner = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export { VideoBanner };
