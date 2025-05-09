import { MainContainer } from "../../../../shared/ui/container/container";
import { Video } from "../video/video";
import { MainPromoContainer, MainPromoContent, MainPromoText, MainPromoTitle, MainPromoWrapper } from "./promo.styles";

export const Promo = () => {

  return (
    <MainPromoContainer>
      <MainContainer>
        <MainPromoWrapper>
          <MainPromoContent>
            <MainPromoTitle tag="h1">
              Most important title on the page
            </MainPromoTitle>

            <MainPromoText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam mattis, leo et condimentum ultricies, sem urna
              convallis metus, vel suscipit nibh lacus tincidunt ante
            </MainPromoText>
          </MainPromoContent>

          <Video videoId="dQw4w9WgXcQ" title="Never Gonna Give You Up"/>
        </MainPromoWrapper>

      </MainContainer>
    </MainPromoContainer>
 );
}