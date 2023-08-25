import { Loading } from "@/components";

import { IButtonDefaultVariantDTO } from "../ButtonDefaultRoot";

interface IButtonDefaultLeftIconProps {
  label: string;
  variant?: IButtonDefaultVariantDTO;
  loading?: boolean;
  datatestid?: string;
}

export default function ButtonDefaultLabel({
  label,
  variant = "primary",
  loading = false,
  datatestid,
}: IButtonDefaultLeftIconProps) {
  return loading ? (
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
    <p data-testid={datatestid ? `${datatestid}-p` : null}>{label}</p>
  );
}
