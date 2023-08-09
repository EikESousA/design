/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEvent } from "react";
import { ReactNode } from "react";

import { Loading } from "@/components";
import { handleRipple } from "@/utils";

import { Container } from "./styles";

interface IButtonDefaultRootProps {
  label: string;
  variant?: IButtonDefaultVariantDTO;
  size?: IButtonDefaultSizeDTO;
  full?: boolean;
  loading?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick: (valu: any) => void;
  datatestid?: string | null;
  children?: ReactNode;
}

export type IButtonDefaultVariantDTO =
  | "primary"
  | "secondary"
  | "tertiary"
  | "danger";
export type IButtonDefaultSizeDTO = "md" | "sm" | "lg";

export default function ButtonDefaultRoot({
  label = "",
  variant = "primary",
  size = "md",
  full = false,
  loading = false,
  type = "button",
  disabled = false,
  onClick = () => alert("Botao apertado"),
  datatestid = null,
  children,
}: IButtonDefaultRootProps) {
  return (
    <Container
      type={type}
      disabled={disabled || loading}
      className={`${variant} ${size} ${full ? "full" : ""} ${
        loading ? "loading" : ""
      }`}
      onClick={(event: MouseEvent<HTMLButtonElement>) =>
        handleRipple({ event, onClick })
      }
      data-testid={datatestid}
      aria-label="button-default"
    >
      {loading ? (
        <Loading.Root
          size="sm"
          datatestid={datatestid ? `${datatestid}-loading` : null}
          variant={
            variant === "danger"
              ? "danger"
              : variant === "primary"
              ? "secondary"
              : "primary"
          }
        />
      ) : (
        <p data-testid={datatestid ? `${datatestid}-p` : null}>{label}</p>
      )}

      {children}
    </Container>
  );
}
