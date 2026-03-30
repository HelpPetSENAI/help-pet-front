import { StyledConversationWrapper } from "./ConversationWrapperStyles";

export default function ConversationWrapper() {
    return (
        <StyledConversationWrapper>
            <div className="wrapper">
                <h1>Conversas</h1>
                <p>Você não conversou com nenhum doador até o momento</p>
                <div>fake docker</div>
            </div>
        </StyledConversationWrapper>
    )
}