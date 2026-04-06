import { StyledConversationWrapper } from "./ConversationWrapperStyles";
import ChatListElement from "./ChatListElement.jsx";

export default function ConversationWrapper() {
    return (
        <StyledConversationWrapper>
            <div className="wrapper">
                <h1 className="chat-list-title">Conversas</h1>
                {/* <p className="no-chats-message">Você não conversou com nenhum doador até o momento</p>
                <div>fake docker</div> */}
                <ChatListElement/>
            </div>
        </StyledConversationWrapper>
    )
}