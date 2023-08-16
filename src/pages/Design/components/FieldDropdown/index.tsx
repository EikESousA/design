import { createRef, useState } from "react";

import { ButtonDefault, Popover } from "@/components";

import { FieldContainer, FieldContent } from "../../styles";

export default function FieldButtonDefault() {
  const elRef = createRef<HTMLButtonElement>();

  const [open, setOpen] = useState(false);

  return (
    <FieldContainer>
      <legend>Botão</legend>
      <FieldContent>
        <ButtonDefault.Root
          label="Abrir"
          ref={elRef}
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        />
      </FieldContent>

      {open && elRef ? (
        <Popover.Root elRef={elRef} open={open} type="top" style={{}}>
          <h1>Teste</h1>
        </Popover.Root>
      ) : null}
    </FieldContainer>
  );
}
