import styled from "styled-components";
import { mTablet } from "../../../config/style/globalMixins";
import { LinkButton } from "../../../shared/ui/link-button";
import { Link } from "react-router-dom";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 37px 60px 40px 27px;

  ${mTablet`
    padding: 30px 20px;
  `}
`

export const Logo = styled(Link)`
  font-size: 24px;
  color: inherit;
  text-decoration: none;
`
export const ContactButton = styled(LinkButton)`
  ${mTablet`
    padding: 6px 30px;
  `}
`;