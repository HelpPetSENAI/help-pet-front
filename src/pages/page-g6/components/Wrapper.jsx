import { StyledWrapper } from "../styles/WrapperStyles";

export default function Wrapper({ children, className = '' }) {
    return (
        <StyledWrapper>
            <section className={`wrapper ${className}`.trim()}>
                {children}
            </section>
        </StyledWrapper>
    )
}
