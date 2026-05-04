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

    .ghost {
        height: 30px;
        width: 19px;
    }
`