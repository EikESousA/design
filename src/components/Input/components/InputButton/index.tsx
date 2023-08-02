import { handleRipple } from "@/utils";
import { Loading } from "@/components";
import { Container } from "./styles";
import Icon from "@/components/Icon";
import { MouseEvent } from "react";
import { IIconDTO } from "@/components/Icon/dtos/IIconDTO";

interface IInputButtonProps {
  onClick: (value?: any) => void;
  icon?: IIconDTO;
  label?: string;
  loading?: boolean;
  disabled?: boolean;
  datatestid?: string;
}

export default function InputButton({
  onClick,
  icon,
  label,
  loading = false,
  disabled = false,
  datatestid,
}: IInputButtonProps) {
  return (
    <Container
      type="button"
      onClick={(event: MouseEvent<HTMLButtonElement>) =>
        handleRipple({ event, onClick: onClick })
      }
      disabled={disabled}
      data-testid={datatestid ? `${datatestid}-button` : null}
    >
      {loading ? (
        <Loading.Root
          size="xs"
          variant={"secondary"}
          datatestid={datatestid ? `${datatestid}-button-loading` : null}
        />
      ) : (
        <>
          {icon ? (
            <Icon.Root
              icon={icon}
              datatestid={datatestid ? `${datatestid}-button-icon` : null}
            />
          ) : (
            <p> {label} </p>
          )}
        </>
      )}
    </Container>
  );
}
