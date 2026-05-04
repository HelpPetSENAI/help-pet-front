import { StyledMessageInput } from '../styles/MessageInputStyles';
import Send from '../../../assets/icons/SendMessageIcon'

export default function MessageInput() {
    return (
        <StyledMessageInput>
            <input type="text" />
            <Send />
        </StyledMessageInput>
    )
}

