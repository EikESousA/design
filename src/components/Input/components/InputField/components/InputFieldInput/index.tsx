/* eslint-disable @typescript-eslint/no-empty-function */
import { ChangeEvent, InputHTMLAttributes, useEffect } from "react";

import { Container } from "./styles";

export interface IInputFieldInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string;
  setValue: (value: string) => void;
  // Options
  required?: boolean;
  disabled?: boolean;
  type?: "text" | "password";
  // Clone
  id?: string;
  variant?: IInputVariantDTO;
  setIsFocused?: (value: boolean) => void;
  setIsFilled?: (value: boolean) => void;
  setIsRequired?: (value: boolean) => void;
  // Test
  datatestid?: string;
}

export type IInputVariantDTO = "primary" | "secondary" | "tertiary";

export default function InputFieldInput({
  name,
  value,
  setValue,
  // Options
  required = false,
  disabled = false,
  type = "text",
  // Clone
  id,
  variant,
  setIsFocused = () => {},
  setIsFilled = () => {},
  setIsRequired = () => {},
  // Test
  datatestid,
}: IInputFieldInputProps) {
  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(value.length > 0);
  }

  useEffect(() => {
    if (setIsFilled) {
      setIsFilled(value.length > 0);
    }
  }, [setIsFilled, value.length]);

  useEffect(() => {
    if (setIsRequired) {
      setIsRequired(required);
    }
  }, [setIsRequired, required]);

  return (
    <Container
      id={id}
      className={`${variant} ${required ? "required" : null}`}
      type={type}
      value={value}
      name={name}
      onChange={(event: ChangeEvent<HTMLInputElement>) =>
        setValue(event.currentTarget.value)
      }
      onFocus={() => handleInputFocus()}
      onBlur={() => handleInputBlur()}
      disabled={disabled}
      placeholder=""
      required={required}
      data-testid={datatestid ? `${datatestid}-input` : null}
    />
  );
}
