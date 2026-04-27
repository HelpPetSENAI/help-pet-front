import styled  from "styled-components";

export const Input = styled.div`
    display: flex;
    max-width: 400px;
    padding: 10px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    background: var(--clr-green-500);
    border:2px solid var(--clr-green-1000);
    

`
export const Inputtext = styled.input`
    border: none;
    background: none;
    color: var(--clr-neutral-1000);
    font-family: Archivo;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    
    
    
    :focus, :focus-visible {
        outline: none;
    }    
`