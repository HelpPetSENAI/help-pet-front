import {Tagspecies} from "./style.js";


export default function TagPet({ text, species}) {
    return (
        <Tagspecies variant={species}>
            <p>{text}</p>
        </Tagspecies>
    )
}