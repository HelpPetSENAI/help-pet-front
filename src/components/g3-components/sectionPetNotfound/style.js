import styled from "styled-components";

export const SectionpetNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ConteinerNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextNotFound = styled.span`
  color: var(--clr-neutral-1000);
  text-align: center;
  font-family: Archivo;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 350px) {
    margin-bottom: 15px;
  }
`;

export const NotFound = styled.img`
  width: 580px;
  height: 350px;

  @media (max-width: 768px) {
    width: 275px;
    height: 199px;
  }
`;
