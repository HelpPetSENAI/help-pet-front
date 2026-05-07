import notResearched from "../../../assets/images/not_researched.png"
import {Conteiner, Fundo, Sectionpet, Text} from "./style.js";


export default function SectionPet() {
    return (
        <Sectionpet>
            <Conteiner>
                <Fundo src={notResearched} alt="fundo"/>
                <Text>
                Clique no botão de pesquisa e escreva o que deseja encontrar
                </Text>
            </Conteiner>
        </Sectionpet>


    )
};


