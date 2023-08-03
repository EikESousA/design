import { useState, useEffect, ChangeEvent, ReactNode } from "react";

import { Container } from "./styles";

interface IInputRootProps {
  id?: string;
  variant?: IInputVariantDTO;
  name: string;
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  full?: boolean;
  datatestid?: string;
  children: ReactNode;
}

export type IInputVariantDTO = "primary" | "secondary" | "tertiary";

export default function InputRoot({
  id,
  variant = "primary",
  name,
  placeholder = "",
  value,
  setValue,
  required = false,
  disabled = false,
  error,
  full = false,
  datatestid,
  children,
}: IInputRootProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(value.length > 0);
  }

  useEffect(() => {
    setIsFilled(value.length > 0);
  }, [value.length]);

  return (
    <Container
      htmlFor={id}
      className={`${variant} ${isFocused ? "focused" : ""} ${
        isFilled ? "filled" : ""
      } ${disabled ? "disabled" : ""}
      ${full ? "full" : ""}`}
      data-testid={datatestid}
    >
      <div className="input">
        <input
          id={id}
          type="text"
          value={value}
          name={name}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setValue(event.currentTarget.value)
          }
          onFocus={() => handleInputFocus()}
          onBlur={() => handleInputBlur()}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          data-testid={datatestid ? `${datatestid}-input` : null}
        />
      </div>

      {error ? (
        <p
          className="error"
          data-testid={datatestid ? `${datatestid}-error` : null}
        >
          {error}
        </p>
      ) : null}

      {children}
    </Container>
  );
}
