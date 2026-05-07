import styled from "styled-components";

export const Filter = styled.div`
    display: flex;
    padding: 0 30px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
    gap: 17px;
    

`

export const Title = styled.h2`
    color: var(--clr-neutral-1000);
    text-align: center;
    font-family: "League Spartan";
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%; /* 40px */
    margin-top: 30px;

`

export const Main = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--clr-green-700);

   
    
`


export const Info = styled.div`
display: flex;
    align-items: center;
    flex-direction: column;
    
 
            


    

`

export const WrapperContent = styled.div`
    display: flex;
    padding: 0 30px;
    flex-direction: column;
    align-items: center;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 30px;
    border: 2px solid var(--clr-green-1000);
    background: var(--clr-green-100);
    gap: 30px;

         ${({ $status }) => $status === "error" && `
         justify-content: center;
         `
        }
    
`

export const CardWrapper = styled.div`
    display: flex;
    gap: 26px;
    flex-wrap: wrap ;
    
`




