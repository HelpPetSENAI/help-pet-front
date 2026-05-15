import notFound from "../../../assets/images/notFound.png";
import {
  ConteinerNotFound,
  NotFound,
  SectionpetNotFound,
  TextNotFound,
} from "./style.js";

export default function SectionPetNotFound() {
  return (
    <SectionpetNotFound>
      <ConteinerNotFound>
        <TextNotFound>Pesquisa não encontrada!</TextNotFound>
        <NotFound src={notFound} alt="background" />
      </ConteinerNotFound>
    </SectionpetNotFound>
  );
}
