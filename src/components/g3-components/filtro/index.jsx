import {CardContainer, CardEmoji, CardSpan} from "./style.js";


export default function CategoryCard({ emoji, category }) {
    return (
            <CardContainer href="">
                <CardEmoji>
                    <CardSpan>
                        {emoji}
                    </CardSpan>
                </CardEmoji>
                {category}
            </CardContainer>
    )
}