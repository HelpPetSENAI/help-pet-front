import CategoryCard from "../../components/g3-components/filtro/index.jsx";
import {Filter, Info, Main, Title, WrapperContent} from "./Style.js";
import Input from "../../components/g3-components/input/index.jsx";
import Header from "../../components/g3-components/header/index.jsx";
import Footer from "../../components/g3-components/footer/index.jsx";
import SectionPet from "../../components/g3-components/SectionPet/index.jsx";



export default function SearchPage() {


    return (

        <Main>
            <Header/>
            <WrapperContent>
                <Info>
                    <Title>O que esta procurando? </Title>
                    <Filter>

                        <CategoryCard emoji={'🦮'} category={'Cachorros'} />
                        <CategoryCard emoji={'🐈'} category={'Gatos'} />
                        <CategoryCard emoji={'🐒'} category={'Macacos'} />
                        <CategoryCard emoji={'🐾'} category={'Filhotes'} />
                        <CategoryCard emoji={'📍'} category={'+Proximos'} />

                    </Filter>

                    <Input/>
                </Info>
                <SectionPet/>

            </WrapperContent>

            <Footer/>

        </Main>
    )
}