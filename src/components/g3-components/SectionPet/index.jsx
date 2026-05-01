import fundo from "../../../assets/icons/g3/fundo.png"
import Card from "../card/index.jsx";
import {Conteiner, Fundo, Sectionpet, Text} from "./style.js";


export default function SectionPet() {
    return (
        <Sectionpet>
            <Conteiner>
                <Fundo src={fundo} alt="fundo"/>
                <Text>
                Clique no botão de pesquisa e escreva o que deseja encontrar
                </Text>
            </Conteiner>


        </Sectionpet>


    )
}