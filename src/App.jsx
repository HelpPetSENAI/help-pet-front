import React, { useState } from 'react';

const CategoriaItem = ({ icone, legenda, cor }) => (
  <div className="categoria-item">
    <div className="icone-box">{icone}</div>
    <span className={`legenda ${cor}`}>{legenda}</span>
  </div>
);

function App() {
  const [busca, setBusca] = useState('');

  const handleSearch = (e) => {
    setBusca(e.target.value);
    console.log("Buscando por:", e.target.value);
  };

  return (
    <div className="app-wrapper">
      <header className="main-header">
        <div className="logo">
          <img src="/Logo.png" alt="HelpPet Logo" />
        </div>
        <div className="back-button" onClick={() => window.history.back()}>
          <img src="/left_arrow.png" alt="Voltar" />
        </div>
      </header>

      <main className="container">
        <section className="content-card">
          <h1>O que está procurando?</h1>

          <div className="categorias-grid">
            <CategoriaItem icone="🐕" legenda="Cachorros" cor="vinho" />
            <CategoriaItem icone="🐈" legenda="Gatos" cor="azul-escuro" />
            <CategoriaItem icone="🐒" legenda="Macacos" cor="verde-escuro" />
            <CategoriaItem icone="🐾" legenda="Filhotes" cor="preto" />
            <CategoriaItem icone="📍" legenda="+ Próximos" cor="vinho" />
          </div>

          <div className="busca-container">
            <div className="busca-barra">
              <span className="busca-lupa">
                <img src="/Lupa.png" alt="Buscar" />
              </span>
              <input 
                type="text" 
                placeholder="O que está procurando?" 
                className="busca-input"
                value={busca}
                onChange={handleSearch}
              />                    
            </div>
          </div>

          <div className="rodape-ilustracao">
            <img src="/Bugs 1.png" alt="Ilustração de busca" className="img-personagem" />
            <p className="texto-ajuda">
              Clique no botão de pesquisa e escreva o que deseja encontrar
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;