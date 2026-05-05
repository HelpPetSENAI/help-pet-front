import { useState } from 'react';
import { StyledMessageInput } from '../styles/MessageInputStyles';
import Send from '../../../assets/icons/SendMessageIcon'

export default function MessageInput({ onSendMessage }) {
    const [message, setMessage] = useState("");

    function handleSend() {
        if (message.trim() === "") return;

        onSendMessage(message);
        setMessage("");
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            handleSend();
        }
    }

    return (
        <StyledMessageInput>
            <input
                type="text"
                className='message-input'
                placeholder='Digite aqui'
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Send className='send-icon' onClick={handleSend}/>
        </StyledMessageInput>
    )
}
