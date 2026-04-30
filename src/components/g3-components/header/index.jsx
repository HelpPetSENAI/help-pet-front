import ArrowReturn from "../../../assets/icons/g3/ArrowReturn.jsx";
import {LogoContainer, PetHeader} from "./style.js";
import Logo from "../../../assets/icons/g3/Logo.jsx";


function Header() {

    return (
        <PetHeader>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <a href="/">
                <ArrowReturn />
            </a>

        </PetHeader>
    );
}

export default Header;