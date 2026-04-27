import styled from "styled-components";

export const StyledWrapper = styled.section`
    background-color: var(--clr-green-500);

    .wrapper {
        font-family: var(--main-font);

        width: 100%;
        min-height: 100vh;

        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        padding: 30px 0px 30px 0px;

        width: 100%;
        height: 100%;

        border: 2px solid var(--clr-green-1000);
        border-radius: 30px 30px 0px 0px;

        background-color: var(--clr-neutral-100);
    }
`