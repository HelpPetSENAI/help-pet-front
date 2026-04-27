import * as Style from "./style.js";
import Logo from "../../assets/icons/g3/Logo.jsx";
import ArrowReturn from "../../assets/icons/g3/ArrowReturn.jsx";

export default function Header() {

    return (
        <Style.Header>
            <Logo/>
            <a href="/"><ArrowReturn/></a>
        </Style.Header>
    );
}