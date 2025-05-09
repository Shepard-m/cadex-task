import { AppRoute } from "../../../shared/consts/app-routes";
import { ContactButton, ContainerHeader, Logo } from "./header.style";

export const Header = () => {

  return (
    <ContainerHeader>
      <Logo to={AppRoute.index}>
        Some Company
      </Logo>
      <ContactButton to={AppRoute.about}>
        Contact us
      </ContactButton>
    </ContainerHeader>
 );
}
