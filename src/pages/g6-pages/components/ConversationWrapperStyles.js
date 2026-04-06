import styled from "styled-components";

export const StyledConversationWrapper = styled.section`
    
    font-family: var(--main-font);
    background: #39C442;

    width: 100%;
    height: calc(100vh - 75px);

    .wrapper {
        display: flex;
        flex-direction: column;
        // justify-content: space-between;
        justify-content: start;
        align-items: center;
        padding: 30px 0px 30px 0px;

        width: 100%;
        height: 100%;

        border: 2px solid var(--clr-green-1000);
        border-radius: 30px 30px 0px 0px;

        background: var(--clr-neutral-100);
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
    }
`
