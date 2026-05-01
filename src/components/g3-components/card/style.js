import styled from 'styled-components';

export const Imagen = styled.img `
    width: 100%;
    height: 152px;
    border-radius: 12px;
    border: 2px solid var(--clr-neutral-1000);
   
    
`
export const CardWarpper = styled.div`
    display: flex;
    width: 315px;
    padding: 16px;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
    background: var(--clr-neutral-100);
    border: 2px solid var(--clr-neutral-1000) ;
    border-radius: 20px;
`
export  const CardContent = styled.div`

    display: flex;
    flex-direction: column;
    gap: 16px;
`

export  const CardText = styled.div`
    display: flex;
    gap: 8px;

`