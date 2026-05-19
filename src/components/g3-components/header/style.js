import styled from "styled-components";

export const PetHeader = styled.header`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  @media (max-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Logotext = styled.p`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Logoimg = styled.p`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;
