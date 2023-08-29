/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, ButtonHTMLAttributes } from "react";

import { Loading } from "@/components";
import Icon from "@/components/Icon";
import { IIconDTO } from "@/components/Icon/dtos/IIconDTO";
import { useTooltip } from "@/hooks/tooltip";
import { handleRipple } from "@/utils";

import { Container } from "./styles";

interface IButtonIconRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IIconDTO;
  variant?: IButtonIconVariantDTO;
  size?: IButtonIconSizeDTO;
  full?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick: (value?: any) => void;
  tooltip?: string;
  datatestid?: string;
  children?: ReactNode;
}

export type IButtonIconVariantDTO =
  | "primary"
  | "secondary"
  | "tertiary"
  | "danger";
export type IButtonIconSizeDTO = "md" | "sm" | "lg";

export default function ButtonIconRoot({
  icon,
  variant = "primary",
  size = "md",
  full = false,
  loading = false,
  disabled = false,
  onClick,
  tooltip,
  datatestid,
  children,
  ...rest
}: IButtonIconRootProps) {
  const { handleOnMouseOut, handleOnMouseOver } = useTooltip();

  return (
    <Container
      data-testid={datatestid}
      className={`${variant} ${size} ${full ? "full" : ""} ${
        loading ? "loading" : ""
      }`}
    >
      <button
        type="button"
        disabled={disabled || loading}
        onClick={(event) => handleRipple({ event, onClick })}
        onMouseOver={
          tooltip && tooltip.length > 0
            ? (event) =>
                handleOnMouseOver({
                  el: event.currentTarget,
                  text: tooltip,
                })
            : undefined
        }
        onMouseOut={
          tooltip && tooltip.length > 0 ? () => handleOnMouseOut() : undefined
        }
        onFocus={
          tooltip && tooltip.length > 0
            ? (event) =>
                handleOnMouseOver({
                  el: event.currentTarget,
                  text: tooltip,
                })
            : undefined
        }
        onBlur={
          tooltip && tooltip.length > 0 ? () => handleOnMouseOut() : undefined
        }
        aria-label="button-icon"
        data-testid={datatestid ? `${datatestid}-button` : null}
        {...rest}
      >
        {loading ? (
          <Loading.Root
            size="sm"
            variant={
              variant === "danger"
                ? "danger"
                : variant === "primary"
                ? "secondary"
                : "primary"
            }
            datatestid={datatestid ? `${datatestid}-loading` : null}
          />
        ) : icon ? (
          <Icon.Root
            icon={icon}
            datatestid={datatestid ? `${datatestid}-icon` : null}
          />
        ) : null}
      </button>

      {children}
    </Container>
  );
}
