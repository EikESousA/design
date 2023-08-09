import { useState } from "react";

import { Input } from "@/components";
import { IInputRootProps } from "@/components/Input/components/InputRoot";

import { Container } from "./styles";

interface IPasswordRootProps extends IInputRootProps {
  label?: string;
}

export type IInputVariantDTO = "primary" | "secondary" | "tertiary";

export default function PasswordRoot({
  id,
  variant = "primary",
  name,
  placeholder = "",
  label = "Senha",
  value,
  setValue,
  required = false,
  disabled = false,
  error,
  full = false,
  datatestid,
  children,
}: IPasswordRootProps) {
  const [show, setShow] = useState(false);

  return (
    <Container data-testid={datatestid}>
      <Input.Root
        id={id}
        type={show ? "text" : "password"}
        variant={variant}
        name={name}
        value={value}
        setValue={setValue}
        placeholder={placeholder}
        full={full}
        error={error}
        disabled={disabled}
        required={required}
        datatestid={datatestid ? `${datatestid}-root` : undefined}
      >
        <Input.Label
          label={label}
          datatestid={datatestid ? `${datatestid}-label` : undefined}
        />
        <Input.Button
          icon={show ? "eye" : "eyeslash"}
          onClick={() => setShow((prev) => !prev)}
        />
      </Input.Root>
      {children}
    </Container>
  );
}
