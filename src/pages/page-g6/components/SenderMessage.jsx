import { StyledSenderMessage } from '../styles/SenderMessageStyles';

export default function SenderMessage({ text, hour }) {
    return (
        <StyledSenderMessage>
            <div className="message-box">
                <p>{text}</p>
            </div>
            <div className="message-hour">{hour}</div>
        </StyledSenderMessage>
    )
}
