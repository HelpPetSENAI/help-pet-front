import styled from "styled-components";

export const Filter = styled.div`
  display: flex;
  padding: 0 30px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  gap: 17px;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  color: var(--clr-neutral-1000);
  text-align: center;
  font-family: "League Spartan";
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 40px */
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 350px) {
    font-size: 25px;
  }
`;

export const Main = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--clr-green-700);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  input::placeholder {
    color: var(--clr-green-1000);
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const WrapperContent = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 0 30px;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 30px;
  border: 2px solid var(--clr-green-1000);
  background: var(--clr-green-100);
  gap: 30px;

  @media (max-width: 768px) {
    justify-content: center;
    padding: 0 16px;
  }
  ${({ $status }) =>
    $status === "error" &&
    `
         justify-content: center;
         `}
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 26px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-bottom: 26px;
`;

export const LoadingDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-height: 200px;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--clr-neutral-1000);
    animation: pulse 1.4s infinite ease-in-out;
  }

  span:nth-child(1) {
    animation-delay: 0s;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.4s;
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 0.2;
      transform: scale(0.8);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
  }
`;
