import styled from "styled-components";

export const StyledConversationWrapper = styled.section`
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    font-family: var(--main-font);
    background: #39C442;

    width: 100%;
    height: calc(100vh - 75px);

    .chats-group {
        width: calc(100% + 40px);
        margin: 0 -20px;
        padding: 0 20px;
    }

    .chat-list-title {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 30px;
    }

    .no-chats-message {
        font-size: 32px;
        font-weight: 400;
        text-align: center;
        line-height: 100%;
    }

    .desktop-chat { display: none; }

    @media (min-width: 769px) {
        .desktop-chat { display: flex; }

        .main {
            display: flex;
            flex-direction: row;

            width: 100vw;
            height: 100vh;
        }
    }
`
