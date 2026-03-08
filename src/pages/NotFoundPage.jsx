import { Link } from "react-router-dom"
import { StyledButton } from "../components/Button/ButtonStyles"
import Fragment from "../components/Fragment"

export default function NotFoundPage() {
    return (
        <Fragment>
            <h1>Não era pra você tá aqui não paizão</h1>

            <StyledButton>
                {/* Utilizar a função Link faz com que essa tag vire uma âncora(<a>) que não recarrega á página ao clickar nela*/}
                <Link to="/">Volta pra página inicial ae</Link>
            </StyledButton>
        </Fragment>
    )
}