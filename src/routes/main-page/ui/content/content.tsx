import { AppRoute } from "../../../../shared/consts/app-routes";
import { MainContentContainer, MainContentItem, MainContentLink, MainContentList, MainContentTitle, MainItemText, MainItemTitle } from "./content.style";

interface IContentProps {
}

export const Content = ({}: IContentProps) => {

  return (
    <MainContentContainer>
      <MainContentTitle>
        Also very important title
      </MainContentTitle>

      <MainContentList>
        {Array.from({length: 6}).map((_, index) => (
          <MainContentItem key={index}>
            <MainItemTitle tag="h3">
              Title
            </MainItemTitle>

            <MainItemText>
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Aliquam mattis, leo et
              condimentum
            </MainItemText>
          </MainContentItem>
        ))}
      </MainContentList>

      <MainContentLink to={AppRoute.about}>
        Contact us
      </MainContentLink>
    </MainContentContainer>
 );
}
