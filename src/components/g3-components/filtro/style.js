import styled from "styled-components";

export const CardContainer= styled.a`
    display: flex;
    gap: 6px;
    flex-direction: column;
    
    
    color: var(--clr-red-900,);
    text-align: center;
    font-family: Archivo;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    width: 46px;
    height: 56px;
    margin: 16px 0;

    @media (max-width: 350px){
        font-size: 10px;
        width: 36px;
        height: 46px
    }

`
export const CardEmoji= styled.div`
    display: flex;
    padding: 12px 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid var(--clr-green-1000);
    background: var(--clr-neutral-100);
    box-shadow: 2px 2px 0 0 var(--clr-green-1000);


   
`
export const CardSpan = styled.span`
    font-size: 30px;

    @media (max-width: 350px) {
        font-size: 20px;
    }
`

export const CardWrapper= styled.div`
    display: flex;
    flex-direction: row;
    gap: 17px;

`