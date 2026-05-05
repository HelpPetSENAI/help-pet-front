import { StyledConversationWrapper } from '../styles/ConversationWrapperStyles.js';
import ChatListElement from "./ChatListElement.jsx";
import Wrapper from "./Wrapper.jsx";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import SenderMessage from "./SenderMessage";
import RecipientMessage from "./RecipientMessage";

export default function ConversationWrapper() {
    const navigate = useNavigate();
    const [messages, setMessages] = useState([]);
    const handleChatClick = () => {
        navigate('/message/chat');
    }

    return (
        <StyledConversationWrapper>
            <Wrapper className="main">
                <h1 className="chat-list-title">Conversas</h1>
                {/* <p className="no-chats-message">Você não conversou com nenhum doador <br></br>até o momento</p> */}
                <div className="chats-group">
                    <ChatListElement onlyClick={handleChatClick}/>
                    <ChatListElement onlyClick={handleChatClick}/>
                    <ChatListElement onlyClick={handleChatClick}/>
                </div>
                <div className='ghost-element'></div>
                <div className="desktop-chat">
                       {messages.map((message) =>
                            message.author === "recipient" ? (
                                <RecipientMessage
                                    key={message.id}
                                    text={message.text}
                                    hour={message.hour}
                                />
                                ) : (
                                <SenderMessage
                                  key={message.id}
                                  text={message.text}
                                  hour={message.hour}
                               />
                          )
                     )}
                </div>
            </Wrapper>
        </StyledConversationWrapper>
    )
}