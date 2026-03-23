export default function SearchResult({found}){

    if(found === null){
        return(
            <div className="result">
                <img src="../assets/icons/Lupa.png"/>
                <p>Clique no botão de pesquisa e escreva o que deseja encontrar</p>
            </div>
        )
    }

    if(found === false){
        return(
            <div className="result">
                <img src="../assets/icons/Bugs%201.png"/>
                <h3>Pesquisa não encontrada!</h3>
            </div>
        )
    }

    return(
        <div>
            <h3>Resultados encontrados!</h3>
        </div>
    )

}