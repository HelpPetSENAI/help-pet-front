import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import MessageInput from './components/MessageInput'
import { StyledChat } from "./ChatStyled";

export default function Chat() {
    return (
        <StyledChat>
            <Header/>
            <Wrapper>
                <h1>Pessoa</h1>
            </Wrapper>
            <MessageInput />
        </StyledChat>
    )
}
