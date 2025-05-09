import styled from "styled-components";
import { MainContainer } from "../../../../shared/ui/container/container";
import { TitleBlock } from "../../../../shared/ui/title-block/ui/title-block";
import { LinkButton } from "../../../../shared/ui/link-button";
import { mTablet } from "../../../../config/style/globalMixins";

export const MainFooterContainer = styled.div`
  background-color: #F5F5F5;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

export const MainFooterWrapper = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  gap: 40px;

  padding: 83px 20px 60px;

  ${mTablet`
    padding: 40px 20px;
  `}
`

export const MainFooterTitle = styled(TitleBlock)`
  align-self: center;

  ${mTablet`
    font-size: 32px;
  `}
`

export const MainFooterLink = styled(LinkButton)`
  align-self: center;
`