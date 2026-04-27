import styled from "styled-components";

export const StyledConversationWrapper = styled.section`
    
    font-family: var(--main-font);
    background: #39C442;

    width: 100%;
    height: calc(100vh - 75px);

    .chat-list-title {
        font-size: 32px;
        font-weight: 700;
        
        margin-bottom: 30px;
    }

    .no-chats-message {
        font-size: 32px;
        font-weight: 400;
        text-align: center;
    }
`
