import React from "react";
import styled from "styled-components";

import { scrollStartPage } from "@src/store/helpers/scrollStartPage";
import { SurfaceRouterLink } from "@src/store/styled/components/router";
import { Space } from "@cmp/UI/Space";

const RouterCard = ({ element }) => {
  const { id, title } = element;

  return (
    <>
      <Link onClick={scrollStartPage} to={`/supports/${id}/${title}`}>
        {title}
      </Link>
    </>
  );
};

export { RouterCard };

// __StyledComponents

const Link = styled(SurfaceRouterLink)`
  text-align: left;
  padding: 15px;
  background-color: ${props => props.theme.colors.secondary};
  box-shadow: ${props => props.theme.colors.primary + "30"} 0px 7px 29px 0px;
  border-radius: 5px;
`;
