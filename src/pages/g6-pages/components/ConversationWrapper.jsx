import { StyledConversationWrapper } from "../styles/ConversationWrapperStyles";
import ChatListElement from "./ChatListElement.jsx";
import Wrapper from "./Wrapper.jsx";
import { useNavigate } from 'react-router-dom';

export default function ConversationWrapper() {
    const navigate = useNavigate();
    const handleChatClick = () => {
        navigate('/messages/chat');
    }

    return (
        <StyledConversationWrapper>
            <Wrapper onlyClick={handleChatClick}>
                <h1 className="chat-list-title">Conversas</h1>
                {/* <p className="no-chats-message">Você não conversou com nenhum doador até o momento</p>
                <div>fake docker</div> */}
                <ChatListElement/>
                <ChatListElement/>
                <ChatListElement/>
            </Wrapper>
        </StyledConversationWrapper>
    )
}