import styled from "styled-components";
import { TitleBlock } from "../../../shared/ui/title-block/ui/title-block";
import { mTablet } from "../../../config/style/globalMixins";

export const FooterContainer = styled.footer`
  position: sticky;
  bottom: 0;
  z-index: 10;

  display: flex;
  justify-content: center;

  width: 100%;
  margin: 0 auto;
  padding: 90px 20px;

  background-color: white;

  ${mTablet`
    padding: 60px 20px 40px;  
  `}
`

export const FooterTitle = styled(TitleBlock)`
  font-size: 24px; 
`