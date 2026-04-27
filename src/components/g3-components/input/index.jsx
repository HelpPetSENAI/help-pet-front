import Searchicon from "../../../assets/icons/search-icon.jsx";
import {Input, Inputtext} from "./style.js";


export default function Inpust(){
    return (
        <Input>
            <Searchicon/>
            <Inputtext placeholder="O que está procurando?" type="text"/>
        </Input>



    )
}