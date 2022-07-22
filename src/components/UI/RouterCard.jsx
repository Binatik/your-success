import React from "react";

import { scrollStartPage } from "@src/store/helpers/scrollStartPage";
import { SurfaceRouterLink } from "@src/store/styled/components/router";

const RouterCard = ({ element }) => {
  const { id, title } = element;;

  return (
    <>
      <SurfaceRouterLink style={{ width: "100%" }} onClick={scrollStartPage} to={`/supports/${id}/${title}`}>
        {title}
      </SurfaceRouterLink>
    </>
  );
};

export { RouterCard };
