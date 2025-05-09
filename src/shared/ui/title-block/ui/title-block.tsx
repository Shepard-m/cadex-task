import styled from "styled-components";

interface ITitleBlockProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const TitleBlock = styled.h1.attrs<ITitleBlockProps>(({ tag = "h2" }) => ({
  as: tag,
}))<ITitleBlockProps>`
  font-size: 48px;
  font-weight: bold;
  color: #0c0c0d;
  letter-spacing: -0.02em;
`;