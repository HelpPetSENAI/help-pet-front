import {Fragment} from "react";
import CategoryCard from "../../components/g3-components/filtro/index.jsx";
import {Filter, Title} from "./Style.js";
import Input from "../../components/g3-components/input/index.jsx";

export default function SearchPage() {
    return (
        <Fragment>

            <Title>O que esta procurando? </Title>
            <Filter>

                <CategoryCard emoji={'🦮'} category={'Cachorros'} />
                <CategoryCard emoji={'🐈'} category={'Gatos'} />
                <CategoryCard emoji={'🐒'} category={'Macacos'} />
                <CategoryCard emoji={'🐾'} category={'Filhotes'} />
                <CategoryCard emoji={'📍'} category={'+Proximos'} />

            </Filter>

            <Input/>


        </Fragment>
    )
}