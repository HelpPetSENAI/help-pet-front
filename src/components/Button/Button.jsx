import { StyledButton } from "../../styles/ButtonStyle";

export default function ButtonLogin({ onClick, loading }) {
  return (
    <StyledButton onClick={onClick} disabled={loading}>
      {loading ? "Entrando..." : "Fazer Login"}
    </StyledButton>
  );
}