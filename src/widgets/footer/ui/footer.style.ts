import styled from "styled-components";
import { TitleBlock } from "../../../shared/ui/title-block/ui/title-block";
import { mTablet } from "../../../config/style/globalMixins";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;

  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 90px 20px;

  ${mTablet`
    padding: 60px 20px 40px;  
  `}
`

export const FooterTitle = styled(TitleBlock)`
  font-size: 24px; 
`