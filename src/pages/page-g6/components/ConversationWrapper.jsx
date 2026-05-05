import { StyledConversationWrapper } from '../styles/ConversationWrapperStyles.js';
import ChatListElement from "./ChatListElement.jsx";
import Wrapper from "./Wrapper.jsx";
import { useNavigate } from 'react-router-dom';

export default function ConversationWrapper() {
    const navigate = useNavigate();
    const handleChatClick = () => {
        navigate('/message/chat');
    }

    return (
        <StyledConversationWrapper>
            <Wrapper>
                <h1 className="chat-list-title">Conversas</h1>
                {/* <p className="no-chats-message">Você não conversou com nenhum doador <br></br>até o momento</p> */}
                <div className="chats-group">
                    <ChatListElement onlyClick={handleChatClick}/>
                    <ChatListElement onlyClick={handleChatClick}/>
                    <ChatListElement onlyClick={handleChatClick}/>
                </div>
                <div className='ghost-element'></div> 
            </Wrapper>
        </StyledConversationWrapper>
    )
}