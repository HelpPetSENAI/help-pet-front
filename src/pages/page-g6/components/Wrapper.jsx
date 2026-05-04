import { StyledWrapper } from "../styles/WrapperStyles";

export default function Wrapper({ children }) {
    return (
        <StyledWrapper>
            <section className="wrapper">
                {children}
                <div className="ghost"></div>
            </section>
        </StyledWrapper>
    )
}