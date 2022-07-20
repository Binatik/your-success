import React from "react";
import styled from "styled-components";

const ThumbWrap = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  width: 100%;
  height: 0;
`;

const VideoIframe = styled.iframe`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;

  @media ${props => props.theme.desktopFirst.tablet} {
    width: 95%;
    height: 95%;
  }
`;

const Loader = styled.span`
  position: absolute;
  font-size: 2rem;
  color: #fff;
`;

const Video = React.memo(({ path }) => {
  return (
    <>
      <Video.Сontent>
        <Loader>Загрузка...</Loader>
        <ThumbWrap>
          <VideoIframe
            src={path}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          ></VideoIframe>
        </ThumbWrap>
      </Video.Сontent>
    </>
  );
});

Video.Сontent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export { Video };
