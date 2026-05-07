import Searchicon from "../../../assets/icons/g3/search-icon.jsx";
import {Input, Inputtext} from "./style.js";


export default function Inpust({input, onChange, onKeyDown,$status }) {
    return (
        <Input $status={$status}>
            <Searchicon/>
            <Inputtext  placeholder="O que está procurando?"
                       type="text"
                       value={input}
                       onChange={onChange}
                       onKeyDown={onKeyDown}



            />
        </Input>



    )
}