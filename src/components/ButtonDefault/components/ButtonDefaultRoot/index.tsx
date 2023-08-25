/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEvent, ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

import { handleRipple } from "@/utils";

import { Container } from "./styles";

type Ref = HTMLButtonElement;
interface IButtonDefaultRootProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: (value: any) => void;
  variant?: IButtonDefaultVariantDTO;
  size?: IButtonDefaultSizeDTO;
  full?: boolean;
  loading?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  datatestid?: string | null;
  children: ReactNode;
}

export type IButtonDefaultVariantDTO =
  | "primary"
  | "secondary"
  | "tertiary"
  | "danger";
export type IButtonDefaultSizeDTO = "md" | "sm" | "lg";

const ButtonDefaultRoot = forwardRef<Ref, IButtonDefaultRootProps>(
  (
    {
      variant = "primary",
      size = "md",
      full = false,
      loading = false,
      type = "button",
      disabled = false,
      onClick,
      datatestid = null,
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <Container
        ref={ref}
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
        {...rest}
      >
        {children}
      </Container>
    );
  },
);

ButtonDefaultRoot.displayName = "ButtonDefaultRoot";

export default ButtonDefaultRoot;
