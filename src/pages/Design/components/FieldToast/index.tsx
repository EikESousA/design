import { ButtonDefault } from "@/components";

import { useToast } from "../../../../hooks/toast";

import { FieldContainer, FieldContent, FieldInfo } from "../../styles";

export default function FieldToast() {
  const { addToast } = useToast();

  return (
    <FieldContainer>
      <legend>Toast</legend>
      <FieldContent />

      <FieldInfo>
        <section style={{ width: "8rem" }}>
          <ButtonDefault.Root
            full
            onClick={() =>
              addToast({
                type: "success",
                message: "Mensagem de sucesso!",
              })
            }
          >
            <ButtonDefault.Label label="Sucesso" />
          </ButtonDefault.Root>
        </section>
        <section style={{ width: "8rem" }}>
          <ButtonDefault.Root
            full
            onClick={() =>
              addToast({ type: "info", message: "Mensagem de informação!" })
            }
          >
            <ButtonDefault.Label label="Informacao" />
          </ButtonDefault.Root>
        </section>
        <section style={{ width: "8rem" }}>
          <ButtonDefault.Root
            full
            onClick={() =>
              addToast({ type: "warning", message: "Mensagem de alerta!" })
            }
          >
            <ButtonDefault.Label label="Alerta" />
          </ButtonDefault.Root>
        </section>
        <section style={{ width: "8rem" }}>
          <ButtonDefault.Root
            full
            onClick={() =>
              addToast({ type: "error", message: "Mensagem de error!" })
            }
          >
            <ButtonDefault.Label label="Erro" />
          </ButtonDefault.Root>
        </section>
      </FieldInfo>
    </FieldContainer>
  );
}
