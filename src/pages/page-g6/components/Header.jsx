import { StyledHeader } from '../styles/HeaderStyles';
import BackArrow from '../../../assets/icons/G6HeaderBackArrow';
import Logo from '../../../assets/icons/G6HeaderLogo';
import { useNavigate } from 'react-router-dom';
import HelpPetTitle from '../../../assets/icons/HelpPetTitle.svg';

export default function Header() {

    const navigate = useNavigate();
    const handleChatClick = () => {
        navigate(-1);
    }

    return (
        <StyledHeader>
            <BackArrow className="back" aria-label="Voltar" onClick={handleChatClick} />
            <div className="brand-area">
                <Logo className="logo" aria-label="Help Pet" />
                <img src={HelpPetTitle} alt="Help Pet" className="help-pet-title" />
            </div>
            <div className="ghost"></div> {/* Elemento fantasma para alinhamento */}
        </StyledHeader>
    )
}
