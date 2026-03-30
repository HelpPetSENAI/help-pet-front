import { StyledHeader } from "./HeaderStyles";
import back from "../../../assets/icons/G6HeaderBackArrow.svg";
import logo from "../../../assets/icons/G6HeaderLogo.svg";

export default function Header() {
    return (
        <StyledHeader>
            <img src={back} alt="Back" className="back" />
            <img src={logo} alt="Logo" className="logo" />
            <div className="ghost"></div>
        </StyledHeader>
    )
}