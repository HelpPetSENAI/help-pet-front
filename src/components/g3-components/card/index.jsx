import {CardContainer, CardDescription, CardDescriptionWrapper, PetImgContainer, TagWrapper} from "./style.js";
import TagPet from "../tagPet/index.jsx";


export default function DonationCard({url, name, size, breed, species}) {

    return (
        <CardContainer>
            <TagWrapper>
                <TagPet text={species} species={species}/>
            </TagWrapper>
            <PetImgContainer src={url} alt={`${name}-photo`}>
                {/*  Foto  */}
            </PetImgContainer>
            <CardDescription>
                <h2>{name}</h2>
                <CardDescriptionWrapper>
                    <p>{size}</p>
                    <p>{breed}</p>
                </CardDescriptionWrapper>
            </CardDescription>
        </CardContainer>
    );
}


