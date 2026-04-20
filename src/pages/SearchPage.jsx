import {Fragment} from "react";
import CategoryCard from "../components/g3-components/filtro/index.jsx";

export default function SearchPage() {
    return (
        <Fragment>


            <CategoryCard emoji={'🦮'} category={'Cachorros'} />
            <CategoryCard emoji={'🐈'} category={'Gatos'} />
            <CategoryCard emoji={'🐒'} category={'Macacos'} />
            <CategoryCard emoji={'🐾'} category={'Filhotes'} />
            <CategoryCard emoji={'📍'} category={'+ Proximos'} />
        </Fragment>
    )
}