import { breakpoints } from "./breakpoints";

export const fontStyle = {
  links: `
    font-size: 1.4rem;

    @media (max-width: ${breakpoints.medium}px) {
      font-size: 1.6rem;
    },
  `,

  title: `
  font-size: 1.8rem;

  @media (max-width: ${breakpoints.medium}px) {
    font-size: 1.4rem;
  },
  `,

  paragraph: `
  font-size: 1.2rem;

  @media (max-width: ${breakpoints.medium}px) {
    font-size: 1.1rem;
  },
  `,

  span: `
  font-size: 0.8rem;

  @media (max-width: ${breakpoints.medium}px) {
    font-size: 0.7rem;
  },
  `,
};
