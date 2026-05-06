import styled from "styled-components"

export const StyledHeader = styled.header`
    background: var(--clr-green-500);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12.5px 30px 12.5px 30px;

    width: 100vw;
    height: 75px;

    .back { cursor: pointer; }
    .help-pet-title { display: none; }
    .brand-area { 
        display: flex;
        align-items: center;
        gap: 10px; 
    }

    .ghost {
        height: 30px;
        width: 19px;
    }

    @media (min-width: 769px) {
        flex-direction: row-reverse;
        padding: 12.5px 50px 12.5px 50px;

        .ghost {
            display: none;
        }

        .help-pet-title {
            display: flex;
        }
    }
`