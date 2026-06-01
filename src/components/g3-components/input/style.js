import styled from "styled-components";

export const Input = styled.div`
  display: flex;
  width: 100%;
  max-width: 1220px;
  max-width: 400px;
  height: 44px;
  padding: 10px;
  align-items: center;
  gap: 8px;

  background: var(--clr-green-500);
  border: 2px solid var(--clr-green-1000);
  margin: 20px 0;

  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ $status }) =>
    $status === "success" &&
    `max-width: 80%;
    `}

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (max-width: 350px) {
    max-width: 80%;
  }

  svg {
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Inputtext = styled.input`
  border: none;
  background: none;
  color: var(--clr-neutral-1000);
  font-family: Archivo;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  width: 100%;

  outline: none;
  box-shadow: none;
`;

export const SearchButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    transition: transform 0.2s;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;
