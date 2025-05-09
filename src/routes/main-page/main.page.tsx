import { Content } from "./ui/content/content";
import { MainFooter } from "./ui/main-footer/footer";
import { Promo } from "./ui/promo/promo";

export default function MainPage() {
  return (
    <>
      <Promo />
      <Content />
      <MainFooter />
    </>
 );
}
