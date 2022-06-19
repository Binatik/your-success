import React from "react";

import { Container } from "@src/store/styled/styleComponents";

import animate from "@src/video/particle.mp4";

import { VideoBanner } from "@cmp/UI/VideoBanner";

const Main = () => {
  return (
    <>
      <VideoBanner video={animate} />
    </>
  );
};

export { Main };
