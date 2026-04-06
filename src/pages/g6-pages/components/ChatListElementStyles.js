import styled from "styled-components";

export const StyledChatListElement = styled.section`
    font-family: var(--main-font);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0px 20px 0px 20px;
    padding: 12px 10px 12px 10px;
    gap: 6px;

    width: 90%;
    height: 75px;

    .chat-avatar {
        height: 51px;
        width: 51px;

        border: 2px var(--clr-green-1000) solid;
        border-radius: 50%;
        box-shadow: 4px 4px 0px 0px #0D2B14;
    }

    .chat-data {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        gap: 2px;
        padding: 10px;

        width: 226px;
    }

    .chat-username {
        font-size: 20px;
        font-weight: 400;
    }

    .chat-last-message {
       font-size: 12px;
       font-weight: 300;
    }

    .chat-right {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        gap: 6px;

        font-size: 10px;
        font-weight: 600;
    }

    .chat-notification-badge {
        height: 19px;
        width: 19px;

        border: 2px var(--clr-green-1000) solid;
        border-radius: 50%;
        margin: 4px;
    }

    
`
