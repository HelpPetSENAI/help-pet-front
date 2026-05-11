
import styled from "styled-components";



export const Sectionpet = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`

export const Text = styled.span`
    color: var(--clr-neutral-1000);
    text-align: center;
    font-family: Archivo;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    
    @media (max-width: 768px) {
        font-size: 12px;
        
    }

      @media (max-width: 350px) {
        margin-bottom: 15px;
        
    }
    
`

export const Fundo = styled.img`    
    width: 580px;
    height: 350px;
    
    @media (max-width: 768px) {
        width: 275px;
        height: 175px;
        
    }
`