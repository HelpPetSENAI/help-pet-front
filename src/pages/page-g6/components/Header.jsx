import { StyledHeader } from '../styles/HeaderStyles';
import BackArrow from '../../../assets/icons/G6HeaderBackArrow';
import Logo from '../../../assets/icons/G6HeaderLogo';

export default function Header() {
    return (
        <StyledHeader>
            <BackArrow className="back" aria-label="Voltar" />
            <Logo className="logo" aria-label="Help Pet" />
            <div className="ghost"></div>
        </StyledHeader>
    )
}
