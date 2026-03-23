import { useState } from "react"

export default function SearchBar({onSearch}){

    const [value,setValue] = useState("")

    function handleSubmit(){

        onSearch(value)

    }

    return(

        <div>

            <input
                placeholder="O que está procurando?"
                value={value}
                onChange={(e)=>setValue(e.target.value)}
            />

            <button onClick={handleSubmit}>
                Buscar
            </button>

        </div>

    )
}