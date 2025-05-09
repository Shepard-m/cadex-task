import styled from "styled-components";
import { TitleBlock } from "../../../../shared/ui/title-block/ui/title-block";
import { mTablet } from "../../../../config/style/globalMixins";

export const MainPromoContainer = styled.div`  
  background-color: #F5F5F5;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;

export const MainPromoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 21px 40px 90px 45px;
  borderTop: "1px solid rgba(0, 0, 0, 0.3)",
  borderBottom: "1px solid rgba(0, 0, 0, 0.3)",

  ${mTablet`
    flex-direction: column;
    padding: 21px 20px 40px;
  `}
`;

export const MainPromoContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 361px;

  ${mTablet`
    max-width: 100%;
  `}
`;

export const MainPromoTitle = styled(TitleBlock)`
  ${mTablet`
    font-size: 22px;
  `}
`;

export const MainPromoText = styled.p`
  line-height: 1.3;

  ${mTablet`
    max-width: 100%;
  `}
`;