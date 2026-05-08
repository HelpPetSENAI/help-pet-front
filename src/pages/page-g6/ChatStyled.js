import styled from "styled-components";

export const StyledChat = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-family: var(--main-font);
    
    .recipient-username { margin-bottom: 10px; }

    .chat-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        gap: 4px;
        padding: 0 16px 0 16px;
    }
`
