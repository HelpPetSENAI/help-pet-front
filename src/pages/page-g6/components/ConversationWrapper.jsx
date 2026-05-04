import { StyledConversationWrapper } from '../styles/ConversationWrapperStyles.js';
// import ChatListElement from "./ChatListElement.jsx";
import Wrapper from "./Wrapper.jsx";
import { useNavigate } from 'react-router-dom';

export default function ConversationWrapper() {
    const navigate = useNavigate();
    const handleChatClick = () => {
        navigate('/messages/chat');
    }

    return (
        <StyledConversationWrapper>
            <Wrapper>
                <h1 className="chat-list-title">Conversas</h1>
                <p className="no-chats-message">Você não conversou com nenhum doador <br></br>até o momento</p>
                {/* <ChatListElement onlyClick={handleChatClick}/>
                <ChatListElement onlyClick={handleChatClick}/>
                <ChatListElement onlyClick={handleChatClick}/> */}
            </Wrapper>
        </StyledConversationWrapper>
    )
}