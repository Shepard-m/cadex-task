import { AppRoute } from "../../../shared/consts/app-routes";
import { ContactButton, ContainerHeader, Logo } from "./header.style";

interface IHeaderProps {
}

export const Header = ({}: IHeaderProps) => {

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
