import { StyledHeader } from '../styles/HeaderStyles';
import BackArrow from '../../../assets/icons/G6HeaderBackArrow';
import Logo from '../../../assets/icons/G6HeaderLogo';
import { useNavigate } from 'react-router-dom';


export default function Header() {
    const navigate = useNavigate();
    const handleChatClick = () => {
        navigate(-1);
    }

    return (
        <StyledHeader>
            <BackArrow className="back" aria-label="Voltar" onClick={handleChatClick} />
            <Logo className="logo" aria-label="Help Pet" />
            <div className="ghost"></div> {/* Elemento fantasma para alinhamento */}
        </StyledHeader>
    )
}
