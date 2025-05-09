import { css } from "styled-components";


export const laptop = (styles: TemplateStringsArray) => css`
  @media (max-width: 1440px) {
    ${css(styles)}
  }
`;

export const mTablet = (styles: TemplateStringsArray) => css`
  @media (max-width: 767px) {
    ${css(styles)}
  }
`;