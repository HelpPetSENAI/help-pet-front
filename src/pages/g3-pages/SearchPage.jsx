import CategoryCard from "../../components/g3-components/filtro/index.jsx";
import {Filter, Info, Main, Title, WrapperContent} from "./style.js";
import Header from "../../components/g3-components/header/index.jsx";
import Footer from "../../components/g3-components/footer/index.jsx";
import SectionPet from "../../components/g3-components/SectionPet/index.jsx";
import {useEffect, useState} from "react";
import Inpust from "../../components/g3-components/input/index.jsx";
import pets from "../../pets.json"



export default function SearchPage() {


    const [query, setQuery] = useState("");
    const [selectedSpecies, setSelectedSpecies] = useState("Todos");
    // const [cards, setCards] = useState([]);

    const species = ["Todos",...new Set(pets.map((pet) => pet.species))];

    const filtered = pets.filter((pet) =>
        const matchName = pet.name.toLowerCase().includes(query.toLowerCase());
        const matchSpecies = selectedSpecies === "Todos" ;


    );

    // const handleSearch = () => {
    //     console.log(query);
    // }


    // useEffect(() => {
    //     fetch("https://grupo3apiconsume-h8hqg6f8h7dsh2ae.chilecentral-01.azurewebsites.net/donations")
    //         .then((res) => res.json())
    //         .then((data) => setCards(data));
    // }, []);


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

                    <Inpust input={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}


                    />
                </Info>
                <SectionPet/>

            </WrapperContent>

            <Footer/>

        </Main>
    )
}