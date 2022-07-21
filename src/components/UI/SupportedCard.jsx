import { SurfaceRouterLink } from '@src/store/styled/components/router';
import React from 'react';

const SupportedCard = ({ element }) => {
  const { id, title, texts } = element;
  return (
    <>
      <SurfaceRouterLink to={`${id}/${title}`}>{title}</SurfaceRouterLink>
    </>
  );
};

export { SupportedCard };