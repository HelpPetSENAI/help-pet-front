  import CategoryCard from "../../components/g3-components/filtro/index.jsx";
  import {
    CardWrapper,
    Filter,
    Info,
    Main,
    Title,
    WrapperContent,
    LoadingDots
  } from "./style.js";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";
  import Header from "../../components/g3-components/header/index.jsx";
  import Footer from "../../components/g3-components/footer/index.jsx";
  import SectionPet from "../../components/g3-components/sectionPet/index.jsx";
  import { useState, useEffect } from "react";
  import InputComponent from "../../components/g3-components/input/index.jsx";
  import DonationCard from "../../components/g3-components/card/index.jsx";
  import SectionPetNotFound from "../../components/g3-components/sectionPetNotfound/index.jsx";

  const STATUS = {
    IDLE: "idle",
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error",
  };

  export default function SearchPage() {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [selectedSpecies, setSelectedSpecies] = useState("");
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(STATUS.IDLE);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("");

    const filters = [
      { emoji: "🐈", label: "Gatos", value: "cat", type: "species" },
      { emoji: "🦮", label: "Cachorros", value: "dog", type: "species" },
      { emoji: "🐒", label: "macacos", value: "monkey", type: "species" },
      { emoji: "🐾", label: "Filhotes", value: "filhote", type: "age" },
      { emoji: "📍", label: "+Proximos", value: "proximos", type: "location" },
    ];

    const token =
      "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbm5AZ21haWwuY29tIiwidXNlcklkIjozLCJpYXQiOjE3NzkxMDQzMTV9.SuusoaQ2crfm5FTC5k4xHMXAvBU98h0W7SqBIADwfVI7alfIsuGxQX5yvzpntRPq";

    const fetchData = async () => {
      setLoading(true);
      setStatus(STATUS.LOADING);

      try {
        const res = await axios.get(
          "https://help-pet-back-g2.azurewebsites.net/donations/viewAll",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setPets(res.data);
        setStatus(STATUS.SUCCESS);
      } catch (err) {
        console.error("Erro ao buscar doações:", err);

        if (err.response) {
          console.error("Erro:", err.response.data);
          alert(
            `Erro ao carregar doações: ${err.response.data.message || "Tente novamente mais tarde"}`,
          );
        } else {
          alert("Erro ao carregar doações. Verifique sua conexão.");
        }

        setStatus(STATUS.ERROR);
      } finally {
        setLoading(false);
      }
    };

    const handleSearch = () => {
      if (!query.trim()) return;
      setSearchTerm(query);
      fetchData();
    };

    useEffect(() => {
      if (selectedSpecies || selectedFilter) {
        fetchData();
      }
    }, [selectedSpecies, selectedFilter]);

    console.log("selectedSpecies:", JSON.stringify(selectedSpecies));

    const filtered = pets.filter((pet) => {
      const search = searchTerm.toLocaleLowerCase().trim();

      const numberTerm = Number(search);

      const isNumber = !isNaN(numberTerm);

      const matchYears =
        isNumber &&
        pet.ageMonths >= numberTerm * 12 &&
        pet.ageMonths < (numberTerm + 1) * 12;

      const matchSpecies =
        selectedSpecies === "" ||
        pet.species?.toLocaleLowerCase() === selectedSpecies?.toLocaleLowerCase();

      const matchSearch =
        search == "" ||
        pet.name?.toLocaleLowerCase().includes(search) ||
        pet.breed?.toLocaleLowerCase().includes(search) ||
        pet.species?.toLocaleLowerCase().includes(search) ||
        pet.size?.toLocaleLowerCase().includes(search) ||
        pet.description?.toLocaleLowerCase().includes(search);

      const matchFilhote = selectedFilter !== "PUPPY" || pet.ageMonths <= 12;

      return (
        (matchSearch || matchYears || (search === "" && matchFilhote)) &&
        matchSpecies &&
        matchFilhote
      );
    });

    return (
      <Main>
        <Header />
        <WrapperContent $status={status}>
          <Info>
            {status === STATUS.IDLE && (
              <div>
                <Title>O que esta procurando? </Title>

                <Filter>
                  {filters.map((filter) => (
                    <CategoryCard
                      id={filter.value}
                      emoji={filter.emoji}
                      label={filter.label}
                      key={filter.value}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (filter.type === "species") {
                          setSelectedSpecies(
                            selectedSpecies === filter.value ? "" : filter.value,
                          );
                        } else {
                          setSelectedFilter(
                            selectedFilter === filter.value ? "" : filter.value,
                          );
                        }
                      }}
                      $status={status}
                    />
                  ))}
                </Filter>
              </div>
            )}

            <InputComponent
              $status={status}
              input={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              onSearch={handleSearch}
            />
          </Info>

          {loading ? (
            <LoadingDots>
              <span></span>
              <span></span>
              <span></span>
            </LoadingDots>
          ) : (
            <>
              {status === STATUS.IDLE && <SectionPet />}

              {status === STATUS.SUCCESS && (
                <>
                  {filtered.length === 0 ? (
                    <SectionPetNotFound />
                  ) : (
                    <CardWrapper>
                      {filtered.map((donation) => (
                        <div
                          key={donation.id}
                          onClick={() => navigate(`/donations/${donation.id}`)}
                        >
                          <DonationCard
                            url={donation.url}
                            name={donation.name}
                            size={donation.size}
                            breed={donation.breed}
                            species={donation.species}
                          />
                        </div>
                      ))}
                    </CardWrapper>
                  )}
                </>
              )}
            </>
          )}
        </WrapperContent>

        <Footer />
      </Main>
    );
  }
