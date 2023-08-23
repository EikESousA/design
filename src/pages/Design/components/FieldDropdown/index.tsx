import { createRef, useState } from "react";

import { ButtonDefault, Popover } from "@/components";

import { FieldContainer, FieldContent } from "../../styles";

export default function FieldButtonDefault() {
  const elRef = createRef<HTMLButtonElement>();

  const [open, setOpen] = useState(false);
  const [test, setTest] = useState("false");

  function handleClose() {
    setOpen(false);
  }

  return (
    <FieldContainer>
      <legend>Botão</legend>
      <FieldContent>
        <ButtonDefault.Root
          label="Abrir"
          ref={elRef}
          onClick={() => {
            setOpen(true);
          }}
        />
      </FieldContent>

      <Popover.Root elRef={elRef} open={open} handleClose={() => handleClose()}>
        <h1>Teste</h1>
        <button type="button" onClick={() => setTest("true")}>
          {test}
        </button>
      </Popover.Root>
    </FieldContainer>
  );
}
