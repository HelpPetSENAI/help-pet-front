import Dock from '../../helpers/Dock/Dock.jsx'
import { MessagePageG6Styled } from './MessageStyled.js'
import Header from './components/Header.jsx'
import ConversationWrapper from './components/ConversationWrapper.jsx'

export default function MessagePageG6() {
  return (
    <MessagePageG6Styled>
      <div className="page-content">
        <Header/>
        <ConversationWrapper/>
      </div>
      <Dock page='message' className="message-dock"/>
    </MessagePageG6Styled>
  )
}
