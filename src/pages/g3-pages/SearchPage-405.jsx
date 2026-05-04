import React from "react";
import {SearchPage405Container, SearchPage405Content, SearchPage405Input} from "./style.js";
import Header from "../../components/g3-components/header/index.jsx";



export default function SearchPage405() {
    return (
        <SearchPage405Container>
            <Header/>
            <SearchPage405Content>
                <SearchPage405Input/>
            </SearchPage405Content>

        </SearchPage405Container>

    )
}