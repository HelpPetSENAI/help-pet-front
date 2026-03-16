import styled from "styled-components"

export const StyledButton = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 1rem;
    
    border-radius: 1rem;
    background-color: var(--clr-green-500);
    
    &:hover {
        background-color: var(--clr-green-400);
        transform: translateY(-5px);
        transition: all 0.4s;
    }
    
    a{
        width: 100%;
        padding: 1rem;
        color: #121212;
    }

`
