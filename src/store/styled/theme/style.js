import { breakpoints } from "./breakpoints";

export const fontStyle = {
  link: `
    font-size: 1.4rem;

    @media (max-width: ${breakpoints.medium}px) {
      font-size: 1.3rem;
    },
  `,

  title: `
  font-size: 1.5rem;

  @media (max-width: ${breakpoints.medium}px) {
    font-size: 1.3rem;
  },
  `,

  sectionTitle: `
  font-size: 2.1rem;

  @media (max-width: ${breakpoints.medium}px) {
    font-size: 1.6rem;
  },
  `,

  paragraph: `
  font-size: 1.2rem;

  @media (max-width: ${breakpoints.medium}px) {
    font-size: 1rem;
  },
  `,

  span: `
  font-size: 0.8rem;

  @media (max-width: ${breakpoints.medium}px) {
    font-size: 0.7rem;
  },
  `,
};
