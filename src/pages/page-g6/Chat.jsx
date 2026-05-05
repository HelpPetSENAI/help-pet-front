import { useState } from "react";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import MessageInput from './components/MessageInput'
import { StyledChat } from "./ChatStyled";
import SenderMessage from "./components/SenderMessage";

export default function Chat() {
    const [messages, setMessages] = useState([]);

    function handleSendMessage(text) {
        const newMessage = {
            id: Date.now(),
            text,
            hour: new Date().toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
            }),
        };

        setMessages([...messages, newMessage]);
    }

    return (
        <StyledChat>
            <Header/>
            <Wrapper>
                <h1 className="recipient-username">Pessoa</h1>
                <div className="chat-container">
                    {messages.map((message) => (
                        <SenderMessage
                            key={message.id}
                            text={message.text}
                            hour={message.hour}
                        />
                    ))}
                </div>
            </Wrapper>
            <MessageInput onSendMessage={handleSendMessage} />
        </StyledChat>
    )
}
