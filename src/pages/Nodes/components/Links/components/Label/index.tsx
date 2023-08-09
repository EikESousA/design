/* eslint-disable no-alert */
import { Container } from "./styles";

export default function Label() {
  return (
    <Container className="flowchart-link-arrow-buttons">
      <button type="button" onClick={() => alert("Botao apertado")}>
        Editar
      </button>
      <button type="button" onClick={() => alert("Botao apertado")}>
        Deletar
      </button>
    </Container>
  );
}
