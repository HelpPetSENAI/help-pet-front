import CategoryCard from "../../components/g3-components/filtro/index.jsx";
import {CardWrapper, Filter, Info, Main, Title, WrapperContent} from "./style.js";
import Header from "../../components/g3-components/header/index.jsx";
import Footer from "../../components/g3-components/footer/index.jsx";
import SectionPet from "../../components/g3-components/sectionPet/index.jsx";
import { useState} from "react";
import Inpust from "../../components/g3-components/input/index.jsx";
import DonationCard from "../../components/g3-components/card/index.jsx";
import SectionPetNotFound from "../../components/g3-components/sectionPetNotfound/index.jsx";


const STATUS = {
    IDLE: "idle",
    SUCCESS: "success",
    ERROR: "error",
};


export default function SearchPage() {


    const [query, setQuery] = useState("");
    const [selectedSpecies, setSelectedSpecies] = useState("");
    const [pets, setPets] = useState([]);
    const [status, setStatus] = useState(STATUS.IDLE);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("");


    const filters = [

        {  emoji: "🐈",label: "Gatos", value: "cat",  type: "species" },
        {  emoji: "🦮",label: "Cachorros", value: "dog",  type: "species" },
        {  emoji: "🐒",label: "macacos", value: "monkey",  type: "species"},
        {  emoji: "🐾",label: "Filhotes", value: "filhote", type: "age" },
        {  emoji: "📍",label: "+Proximos", value: "proximos" , type: "location"}

    ];

    const handleSearch = async () =>{
        if (!query.trim()) return;



        try {
            const res = await fetch("https://grupo3apiconsume-h8hqg6f8h7dsh2ae.chilecentral-01.azurewebsites.net/donations")
            if (!res.ok) throw new Error("Erro na requisição");

           ;

            const data = await res.json();

            setPets(data);
            setSearchTerm(query)
           setStatus(STATUS.SUCCESS);
        } catch (err) {

            setStatus(STATUS.ERROR);
        }
    };

    console.log("selectedSpecies:", JSON.stringify(selectedSpecies));

    const filtered = pets.filter((pet) => {
        const matchName = pet.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchSpecies = !selectedSpecies || pet.species === selectedSpecies;
        const matchFilhote = selectedFilter !== "filhote" || pet.ageMonths <= 12;

       // const matchProximos = selectedFilter !== "proximos" || pet.cep === ;

        return matchName && matchSpecies && matchFilhote ;
    });


    return (

        <Main>
            <Header/>
            <WrapperContent $status={status}>
                <Info>

                    {status === STATUS.IDLE && (
                        <div>
                            <Title>O que esta procurando? </Title>

                            <Filter >
                                {filters.map((filter) => (
                                    <CategoryCard
                                        emoji={filter.emoji}
                                        label={filter.label}
                                    key={filter.value}
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (filter.type === "species") {
                                            setSelectedSpecies(selectedSpecies === filter.value ? " " : filter.value);
                                        }else {
                                            setSelectedFilter(selectedFilter === filter.value ? " " : filter.value);
                                        }
                                    }}
                                        $status={status}
                                    />

                                ))}


                            </Filter>
                        </div>

                             )}

                    <Inpust $status={status}
                        input={query}
                            onChange={(e) => setQuery(e.target.value)}
                             onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />

                </Info>

                {status === STATUS.IDLE && (
                    <SectionPet/>
                )}

                {status === STATUS.SUCCESS && (
                    <CardWrapper>
                        {filtered.length === 0 ? (
                           <p>erro</p>
                        ) : (
                            filtered.map((pet) => (
                                <DonationCard url={pet.url}  name={pet.name} size={pet.size} breed={pet.breed} species={pet.species} />
                            ))
                        )}
                    </CardWrapper>
                )}

                {status === STATUS.ERROR && (
                    <SectionPetNotFound/>
                )}



            </WrapperContent>

            <Footer/>

        </Main>
    )

}