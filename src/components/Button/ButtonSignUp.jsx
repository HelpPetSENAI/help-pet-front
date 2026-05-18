import { StyledButton } from "../../styles/ButtonStyle";

export default function ButtonSignUp({ onClick, loading }) {
  return (
    <StyledButton onClick={onClick} disabled={loading}>
      {loading ? "Cadastrando..." : "Cadastrar-se"}
    </StyledButton>
  );
}