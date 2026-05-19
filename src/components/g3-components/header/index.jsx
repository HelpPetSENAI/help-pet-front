import ArrowReturn from "../../../assets/icons/g3/ArrowReturn.jsx";
import { LogoContainer, Logoimg, Logotext, PetHeader } from "./style.js";
import LogoText from "../../../assets/icons/g3/LogoText.jsx";
import Logo from "../../../assets/icons/g3/Logo.jsx";

function Header() {
  return (
    <PetHeader>
      <LogoContainer>
        <Logotext>
          <LogoText />
        </Logotext>
        <Logoimg>
          <Logo />
        </Logoimg>
      </LogoContainer>
      <a href="/searchPage">
        <ArrowReturn />
      </a>
    </PetHeader>
  );
}

export default Header;
