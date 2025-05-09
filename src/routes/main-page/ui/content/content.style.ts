import styled from "styled-components";
import { MainContainer } from "../../../../shared/ui/container/container";
import { TitleBlock } from "../../../../shared/ui/title-block/ui/title-block";
import { LinkButton } from "../../../../shared/ui/link-button";
import { mTablet } from "../../../../config/style/globalMixins";

export const MainContentContainer = styled(MainContainer)`
  display: flex;
  flex-direction: column;

  padding: 50px 65px 40px;

  ${mTablet`
    padding: 40px 20px;
  `}
`

export const MainContentTitle = styled(TitleBlock)`
  align-self: center;

  ${mTablet`
    font-size: 32px;
  `}
`

export const MainContentList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minMax(263px, 1fr));
  column-gap: 115px;
  row-gap: 100px;

  padding-top: 100px;

  ${mTablet`
    row-gap: 40px;

    padding-top: 40px;
  `}
`

export const MainContentItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const MainItemTitle = styled(TitleBlock)`
  font-size: 24px;
  font-weight: 600px;
  letter-spacing: -0.02em;
`

export const MainItemText = styled.p`
  color: #757575;
  line-height: 1.4;
`

export const MainContentLink = styled(LinkButton)`
  margin-top: 60px;
  align-self: center;
`