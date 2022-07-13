import React from "react";
import styled from "styled-components";

const VideoWrapper = styled.div`
  width: 50%;

  @media ${props => props.theme.desktopFirst.tablet} {
    width: 100%;
  }
`;

const ThumbWrap = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25px;
  height: 0;
`;

const Video = ({ path }) => {
  return (
    <>
      <VideoWrapper>
        <ThumbWrap>
          <Video.Video
            src={path}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Video.Video>
        </ThumbWrap>
      </VideoWrapper>
    </>
  );
};

Video.Video = styled.iframe`
  position: absolute;
  left: 50%;
  top: 0;
  width: 100%;
  height: 100%;

  @media ${props => props.theme.desktopFirst.tablet} {
    left: 0;
  }
`;

export { Video };
