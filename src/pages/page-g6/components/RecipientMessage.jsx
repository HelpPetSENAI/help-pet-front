import { StyledRecipientMessage } from '../styles/RecipientMessageStyles';
import Avatar from '../../../assets/icons/ChatAvatar';

export default function RecipientMessage({ text, hour }) {
    return (
        <StyledRecipientMessage>
            <Avatar/>
            <div className="message-box">
                <p>{text}</p>
            </div>
            <div className="message-hour">{hour}</div>
        </StyledRecipientMessage>
    )
}