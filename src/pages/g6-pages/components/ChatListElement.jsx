import { StyledChatListElement } from "./ChatListElementStyles";
import logo from "../../../assets/icons/G6GreenBall.svg";

export default function ChatListElement() {
    return (
        <StyledChatListElement>
                <img className="chat-avatar" src={logo} alt="avatar" />
                <div className="chat-data">
                    <span className="chat-username">Pessoa</span>
                    <span className="chat-last-message">Última mensagem</span>
                </div>
                <div className="chat-right">
                    <span className="last-message-time">12:00</span>
                    <img className="chat-notification-badge" src={logo} alt="unread message" />
                </div>
        </StyledChatListElement>
    )
}
