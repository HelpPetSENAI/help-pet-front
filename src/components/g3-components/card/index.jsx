import {CardContainer, CardDescription, CardDescriptionWrapper, PetImgContainer, TagWrapper} from "./style.js";


export default function DonationCard() {

    return (
        <CardContainer>
            <TagWrapper>
                <DogTag/>
            </TagWrapper>
            <PetImgContainer>
                {/*  Foto  */}
            </PetImgContainer>
            <CardDescription>
                <h2>Nome do Pet</h2>
                <CardDescriptionWrapper>
                    <p>Porte</p>
                    <p>Raça</p>
                    <p>Localização (em km)</p>
                </CardDescriptionWrapper>
            </CardDescription>
        </CardContainer>
    );
}


