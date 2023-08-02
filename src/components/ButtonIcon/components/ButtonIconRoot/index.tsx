import { useTooltip } from "@/hooks/tooltip";

import { Loading } from "@/components";
import { handleRipple } from "@/utils";
import { Container } from "./styles";
import Icon from "@/components/Icon";
import { ReactNode } from "react";
import { IIconDTO } from "@/components/Icon/dtos/IIconDTO";

interface IButtonIconRootProps {
  icon: IIconDTO;
  variant?: IButtonIconVariantDTO;
  size?: IButtonIconSizeDTO;
  full?: boolean;
  loading?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick: (valu: any) => void;
  tooltip?: string;
  datatestid?: string | null;
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
  type = "button",
  disabled = false,
  onClick = () => {},
  tooltip = "",
  datatestid = null,
  children,
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
        type={type}
        disabled={disabled || loading}
        onClick={(event) => handleRipple({ event, onClick })}
        onMouseOver={
          tooltip.length > 0
            ? (event) => handleOnMouseOver({ event, label: tooltip })
            : () => {}
        }
        onMouseOut={tooltip.length > 0 ? () => handleOnMouseOut() : () => {}}
        aria-label="button-icon"
        data-testid={datatestid ? `${datatestid}-button` : null}
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
        ) : (
          <>
            {icon ? (
              <Icon.Root
                icon={icon}
                datatestid={datatestid ? `${datatestid}-icon` : null}
              />
            ) : null}
          </>
        )}
      </button>

      {children}
    </Container>
  );
}
