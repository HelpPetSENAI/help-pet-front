import { CardContainer, CardEmoji, CardSpan, CardWrapper } from "./style.js";

export default function CategoryCard({ key, onClick, href, emoji, label }) {
  return (
    <CardWrapper>
      <CardContainer key={key} href={href} onClick={onClick}>
        <CardEmoji>
          <CardSpan>{emoji}</CardSpan>
        </CardEmoji>
        {label}
      </CardContainer>
    </CardWrapper>
  );
}
