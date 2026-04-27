import styled from "styled-components"

export const StyledHeader = styled.header`

    background: var(--clr-green-500);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12.5px 30px 12.5px 30px;

    width: 100%;
    height: 75px;

    .back {
        position: relative;
        height: 30px;
    }

    .logo {
        height: 50px;
    }

    .ghost {
        height: 30px;
        width: 19px;
    }


    `