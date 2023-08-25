import { useState, ReactNode } from "react";

import { Input } from "@/components";

import { Container } from "./styles";

interface IPasswordRootProps {
  id: string;
  variant?: IInputVariantDTO;
  name: string;
  value: string;
  setValue: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  full?: boolean;
  label?: string;
  datatestid?: string;
  children: ReactNode;
}

export type IInputVariantDTO = "primary" | "secondary" | "tertiary";

export default function PasswordRoot({
  id,
  variant = "primary",
  name,
  label = "Senha",
  value,
  setValue,
  required = false,
  disabled = false,
  full = false,
  datatestid,
  children,
}: IPasswordRootProps) {
  const [show, setShow] = useState(false);

  return (
    <Container data-testid={datatestid}>
      <Input.Root variant={variant} full={full}>
        <Input.Field.Root id={id}>
          <Input.Field.Label
            label={label}
            datatestid={datatestid ? `${datatestid}-label` : undefined}
          />
          <Input.Field.Input
            type={show ? "text" : "password"}
            name={name}
            value={value}
            setValue={setValue}
            disabled={disabled}
            required={required}
            datatestid={datatestid ? `${datatestid}-root` : undefined}
          />
          <Input.Field.Button
            icon={show ? "eye" : "eyeslash"}
            onClick={() => setShow((prev) => !prev)}
            disabled={disabled}
          />
        </Input.Field.Root>
      </Input.Root>

      {children}
    </Container>
  );
}
