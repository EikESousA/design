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
            label="Sucesso"
            full
            onClick={() =>
              addToast({
                type: "success",
                message: "Mensagem de sucesso!",
              })
            }
          />
        </section>
        <section style={{ width: "8rem" }}>
          <ButtonDefault.Root
            label="Informacao"
            full
            onClick={() =>
              addToast({ type: "info", message: "Mensagem de informação!" })
            }
          />
        </section>
        <section style={{ width: "8rem" }}>
          <ButtonDefault.Root
            label="Alerta"
            full
            onClick={() =>
              addToast({ type: "warning", message: "Mensagem de alerta!" })
            }
          />
        </section>
        <section style={{ width: "8rem" }}>
          <ButtonDefault.Root
            label="Erro"
            full
            onClick={() =>
              addToast({ type: "error", message: "Mensagem de error!" })
            }
          />
        </section>
      </FieldInfo>
    </FieldContainer>
  );
}
