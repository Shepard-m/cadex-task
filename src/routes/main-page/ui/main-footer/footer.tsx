import { AppRoute } from "../../../../shared/consts/app-routes";
import { MainFooterContainer, MainFooterLink, MainFooterTitle, MainFooterWrapper } from "./footer.style";

interface IFooterProps {
}

export const MainFooter = ({}: IFooterProps) => {

  return (
    <MainFooterContainer>
      <MainFooterWrapper>
        <MainFooterTitle>
          Less important title
        </MainFooterTitle>

        <MainFooterLink to={AppRoute.about}>
          Contact us
        </MainFooterLink> 
      </MainFooterWrapper>
    </MainFooterContainer>
 );
}
