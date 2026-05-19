import styled   from "styled-components";

export const variants = {
    amphibian:`
        background: var(--clr-green-500);
        `,
    arachnid:`
        background: var(--clr-yellow-500);
    `,
    bird:`
        background: var(--clr-cyan-500);
    `,
    cat:`
        background: var(--clr-blue-500);
    `,
    cnidaria:`
         background: #00B89F;
    `,
    dog:`
     background: var(--clr-red-500);
    `,
    fish:`
      background: #FF6B35;
    `,
    reptiles:`
      background: #7ED321;
    `,
    rodents:`
      background: var(--clr-magenta-500)
    `
}

export const Tagspecies = styled.div`
    display: inline-flex;
    padding: 8px;
    align-items: center;
    gap: 8px;

    font-family: var(--main-font), sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 51%;
    border-radius: 50px;
    
    ${({variant}) => variants[variant]}
    
    
    
`;