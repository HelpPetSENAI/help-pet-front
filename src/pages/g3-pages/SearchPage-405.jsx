import React from "react";
import Header from "../../components/g3/Header";
import {SearchPage405Container, SearchPage405Content, SearchPage405Input} from "./style.js";
import {Link} from "react-router-dom";


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