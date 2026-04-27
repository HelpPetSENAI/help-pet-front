import styled from "styled-components";

export const StyledChatListElement = styled.section`
    font-family: var(--main-font);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    width: auto; 
    height: 75px;
    padding: 12px 10px;
    gap: 6px;
    margin: 0 5.3%;

    &:not(:last-child) {
        border-bottom: 1px solid var(--clr-cyan-900);
    }

    .chat-avatar {
        flex-shrink: 0;
        height: 51px;
        width: 51px;
        border: 2px var(--clr-green-1000) solid;
        border-radius: 50%;
        box-shadow: 4px 4px 0px 0px #0D2B14;
    }

    .chat-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 2px;
        padding: 0 10px;
        flex-grow: 1; 
    }

    .chat-username {
        font-size: 20px;
        font-weight: 400;
        color: var(--clr-green-1000);
    }

    .chat-last-message {
       font-size: 12px;
       font-weight: 300;
       white-space: nowrap;
       overflow: hidden;
       text-overflow: ellipsis;
       max-width: 180px; 
    }

    .chat-right {
        display: flex;
        flex-direction: column;
        align-items: center; 
        justify-content: center;
        gap: 4px;
        min-width: 50px;
        font-size: 10px;
        font-weight: 600;
    }

    .chat-notification-badge {
        height: 15px; 
        width: 15px;
        border: 2px var(--clr-green-1000) solid;
        border-radius: 50%;
    }
`;